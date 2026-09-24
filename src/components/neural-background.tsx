"use client";

import { useEffect, useRef } from "react";

const FRAME_INTERVAL = 1000 / 30;
const CONNECTION_DISTANCE = 184;
const POINTER_DISTANCE = 228;

type NeuralNode = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
};

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0, active: false };
    let reducedMotion = motionQuery.matches;
    let hasFinePointer = finePointerQuery.matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let nodes: NeuralNode[] = [];
    let animationFrame = 0;
    let lastFrame = 0;
    const shouldStayStatic = () => reducedMotion || !hasFinePointer;

    const createNodes = () => {
      const nodeCount = shouldStayStatic()
        ? width < 768 ? 24 : 34
        : Math.min(88, Math.max(54, Math.floor((width * height) / 18000)));
      const columns = Math.max(3, Math.round(Math.sqrt((nodeCount * width) / height)));
      const rows = Math.ceil(nodeCount / columns);

      // A jittered lattice gives the web even coverage without looking like a grid.
      nodes = Array.from({ length: nodeCount }, (_, index) => ({
        x: ((index % columns) + 0.2 + Math.random() * 0.6) * (width / columns),
        y: (Math.floor(index / columns) + 0.2 + Math.random() * 0.6) * (height / rows),
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: 1 + Math.random() * 1.5,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createNodes();
    };

    const updateNodes = () => {
      if (pointer.active) {
        pointer.x += (pointer.targetX - pointer.x) * 0.18;
        pointer.y += (pointer.targetY - pointer.y) * 0.18;
      }

      for (const node of nodes) {
        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 1 && distance < POINTER_DISTANCE) {
            const attraction = (1 - distance / POINTER_DISTANCE) * (distance < 54 ? -0.003 : 0.004);
            node.x += dx * attraction;
            node.y += dy * attraction;
          }
        }

        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.018;

        if (node.x < -12) node.x = width + 12;
        if (node.x > width + 12) node.x = -12;
        if (node.y < -12) node.y = height + 12;
        if (node.y > height + 12) node.y = -12;
      }
    };

    const drawScene = (time = 0) => {
      context.clearRect(0, 0, width, height);
      const animateSignals = !shouldStayStatic();

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];

        for (let targetIndex = index + 1; targetIndex < nodes.length; targetIndex += 1) {
          const target = nodes[targetIndex];
          const distance = Math.hypot(node.x - target.x, node.y - target.y);

          if (distance < CONNECTION_DISTANCE) {
            const proximity = pointer.active
              ? Math.max(0, 1 - Math.hypot(node.x - pointer.x, node.y - pointer.y) / POINTER_DISTANCE)
                + Math.max(0, 1 - Math.hypot(target.x - pointer.x, target.y - pointer.y) / POINTER_DISTANCE)
              : 0;
            const opacity = Math.min(0.7, 0.12 + (1 - distance / CONNECTION_DISTANCE) * 0.3 + proximity * 0.15);
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            context.lineWidth = proximity > 0.2 ? 1 : 0.8;
            context.stroke();

            // Small travelling packets suggest data moving through the network.
            if (animateSignals && distance < CONNECTION_DISTANCE * 0.85 && (index * 7 + targetIndex) % 9 === 0) {
              const progress = (time * 0.00014 + index * 0.31 + targetIndex * 0.11) % 1;
              context.beginPath();
              context.arc(
                node.x + (target.x - node.x) * progress,
                node.y + (target.y - node.y) * progress,
                1.45,
                0,
                Math.PI * 2,
              );
              context.fillStyle = "rgba(151, 242, 255, 0.76)";
              context.fill();
            }
          }
        }

        if (pointer.active) {
          const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (pointerDistance < POINTER_DISTANCE) {
            const opacity = (1 - pointerDistance / POINTER_DISTANCE) * 0.7;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(151, 242, 255, ${opacity})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        const pulse = shouldStayStatic() ? 0 : Math.sin(node.pulse) * 0.35;
        const pointerProximity = pointer.active
          ? Math.max(0, 1 - Math.hypot(node.x - pointer.x, node.y - pointer.y) / POINTER_DISTANCE)
          : 0;
        context.beginPath();
        context.arc(node.x, node.y, Math.max(0.8, node.radius + pulse + pointerProximity * 0.65), 0, Math.PI * 2);
        context.fillStyle = `rgba(56, 211, 237, ${0.63 + pointerProximity * 0.31})`;
        context.fill();
      }

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 140);
        glow.addColorStop(0, "rgba(6, 182, 212, 0.13)");
        glow.addColorStop(1, "rgba(6, 182, 212, 0)");
        context.fillStyle = glow;
        context.fillRect(pointer.x - 140, pointer.y - 140, 280, 280);

        context.beginPath();
        context.arc(pointer.x, pointer.y, 21 + Math.sin(time * 0.0025) * 3, 0, Math.PI * 2);
        context.strokeStyle = "rgba(151, 242, 255, 0.5)";
        context.lineWidth = 1;
        context.stroke();
        context.beginPath();
        context.arc(pointer.x, pointer.y, 2.5, 0, Math.PI * 2);
        context.fillStyle = "rgba(209, 250, 255, 0.9)";
        context.fill();
      }
    };

    const animate = (time: number) => {
      animationFrame = window.requestAnimationFrame(animate);
      if (time - lastFrame < FRAME_INTERVAL) return;

      lastFrame = time;
      updateNodes();
      drawScene(time);
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      if (shouldStayStatic() || document.hidden) {
        drawScene();
        return;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (shouldStayStatic() || event.pointerType === "touch") return;
      if (!pointer.active) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      }
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(animationFrame);
      } else {
        start();
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      pointer.active = false;
      resize();
      start();
    };

    const handlePointerChange = (event: MediaQueryListEvent) => {
      hasFinePointer = event.matches;
      pointer.active = false;
      resize();
      start();
    };

    const handleResize = () => {
      resize();
      start();
    };

    resize();
    drawScene();
    start();

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);
    finePointerQuery.addEventListener("change", handlePointerChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
      finePointerQuery.removeEventListener("change", handlePointerChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-background" aria-hidden="true" />;
}
