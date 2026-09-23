import Link from "next/link";

/** The circuit-shaped N follows the mark shown in the NEURALIS brand palette. */
export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Retour a l'accueil NEURALIS">
      <svg
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="h-12 w-12 shrink-0 text-[#06b6d4] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
      >
        <g stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 14v36M13 13l39 39M52 14v36M27 27l25 25" />
          <circle cx="12" cy="10" r="5" fill="white" />
          <circle cx="52" cy="10" r="5" fill="white" />
          <circle cx="12" cy="54" r="5" fill="white" />
          <circle cx="52" cy="54" r="5" fill="white" />
          <circle cx="26" cy="26" r="5" fill="white" />
        </g>
      </svg>
      <span className="text-[1.55rem] font-medium leading-none tracking-[-0.055em] text-[#0f172a] transition-colors duration-200 group-hover:text-[#08758b] motion-reduce:transition-none">
        Neuralis
      </span>
    </Link>
  );
}
