"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";

type DetailDialogProps = {
  title: string;
  eyebrow?: string;
  triggerLabel?: string;
  triggerClassName?: string;
  children: ReactNode;
};

export function DetailDialog({
  title,
  eyebrow,
  triggerLabel = "En savoir plus",
  triggerClassName,
  children,
}: DetailDialogProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const backdropPointerDown = useRef(false);
  const restoreScrollRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      restoreScrollRef.current?.();
    };
  }, []);

  function openDialog() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    dialog.showModal();
    const body = document.body;
    const overflow = body.style.getPropertyValue("overflow");
    const priority = body.style.getPropertyPriority("overflow");
    body.style.setProperty("overflow", "hidden");
    restoreScrollRef.current = () => {
      if (overflow) {
        body.style.setProperty("overflow", overflow, priority);
      } else {
        body.style.removeProperty("overflow");
      }
      restoreScrollRef.current = null;
    };
  }

  function handleClose() {
    backdropPointerDown.current = false;
    restoreScrollRef.current?.();
    triggerRef.current?.focus({ preventScroll: true });
  }

  function isOutsideDialog(clientX: number, clientY: number) {
    const rect = dialogRef.current?.getBoundingClientRect();
    return !!rect && (
      clientX < rect.left || clientX > rect.right ||
      clientY < rect.top || clientY > rect.bottom
    );
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={openDialog}
        className={triggerClassName ?? "inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-cyan-800 transition-colors hover:text-cyan-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 motion-reduce:transition-none"}
      >
        {triggerLabel}
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={handleClose}
        onPointerDown={(event) => {
          backdropPointerDown.current = event.button === 0 &&
            event.target === event.currentTarget &&
            isOutsideDialog(event.clientX, event.clientY);
        }}
        onPointerCancel={() => { backdropPointerDown.current = false; }}
        onClick={(event) => {
          const startedOutside = backdropPointerDown.current;
          backdropPointerDown.current = false;
          if (startedOutside && event.target === event.currentTarget &&
            isOutsideDialog(event.clientX, event.clientY)) {
            dialogRef.current?.close();
          }
        }}
        className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-[1040px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 text-slate-800 shadow-[0_28px_100px_rgba(20,40,59,0.22)] outline-none backdrop:bg-slate-950/50 backdrop:backdrop-blur-sm open:flex motion-safe:transition-[opacity,transform] motion-safe:duration-200 motion-safe:starting:open:translate-y-2 motion-safe:starting:open:opacity-0 motion-reduce:transition-none"
      >
        <header className="sticky top-0 z-10 flex shrink-0 items-start justify-between gap-5 border-b border-slate-200 bg-white px-6 py-6 sm:px-10 sm:py-8">
          <div className="min-w-0">
            {eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
                {eyebrow}
              </p>
            ) : null}
            <h2 id={titleId} className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Fermer la fenêtre de détail"
            onClick={() => dialogRef.current?.close()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:border-cyan-700 hover:bg-cyan-50 hover:text-cyan-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700 motion-reduce:transition-none"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>
        <div className="min-h-0 overflow-y-auto overscroll-contain px-6 py-7 sm:px-10 sm:py-9">
          {children}
        </div>
      </dialog>
    </>
  );
}
