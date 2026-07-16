"use client";

import { useEffect, useRef } from "react";

const FRAME_INTERVAL = 1000 / 30;
const CONNECTION_DISTANCE = 148;
const POINTER_DISTANCE = 210;

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
    const pointer = { x: 0, y: 0, active: false };
    let reducedMotion = motionQuery.matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let nodes: NeuralNode[] = [];
    let animationFrame = 0;
    let lastFrame = 0;

    const createNodes = () => {
      const areaCount = Math.floor((width * height) / 32000);
      const nodeCount = reducedMotion ? 18 : width < 768 ? 26 : Math.min(58, Math.max(36, areaCount));

      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (width < 768 ? 0.16 : 0.26),
        vy: (Math.random() - 0.5) * (width < 768 ? 0.16 : 0.26),
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
      for (const node of nodes) {
        if (pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 1 && distance < POINTER_DISTANCE) {
            const attraction = (1 - distance / POINTER_DISTANCE) * 0.006;
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

    const drawScene = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];

        for (let targetIndex = index + 1; targetIndex < nodes.length; targetIndex += 1) {
          const target = nodes[targetIndex];
          const distance = Math.hypot(node.x - target.x, node.y - target.y);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.3;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        if (pointer.active) {
          const pointerDistance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (pointerDistance < POINTER_DISTANCE) {
            const opacity = (1 - pointerDistance / POINTER_DISTANCE) * 0.48;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(pointer.x, pointer.y);
            context.strokeStyle = `rgba(103, 232, 249, ${opacity})`;
            context.lineWidth = 0.9;
            context.stroke();
          }
        }

        const pulse = reducedMotion ? 0 : Math.sin(node.pulse) * 0.35;
        context.beginPath();
        context.arc(node.x, node.y, Math.max(0.8, node.radius + pulse), 0, Math.PI * 2);
        context.fillStyle = "rgba(103, 232, 249, 0.7)";
        context.fill();
      }

      if (pointer.active) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 120);
        glow.addColorStop(0, "rgba(34, 211, 238, 0.1)");
        glow.addColorStop(1, "rgba(34, 211, 238, 0)");
        context.fillStyle = glow;
        context.fillRect(pointer.x - 120, pointer.y - 120, 240, 240);
      }
    };

    const animate = (time: number) => {
      animationFrame = window.requestAnimationFrame(animate);
      if (time - lastFrame < FRAME_INTERVAL) return;

      lastFrame = time;
      updateNodes();
      drawScene();
    };

    const start = () => {
      window.cancelAnimationFrame(animationFrame);
      if (reducedMotion || document.hidden) {
        drawScene();
        return;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType === "touch") return;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
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

    resize();
    drawScene();
    start();

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-background" aria-hidden="true" />;
}
