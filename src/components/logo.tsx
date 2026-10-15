import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

type LogoProps = {
  /** Visual size; `md` (default) suits the header and footer. */
  size?: "sm" | "md" | "lg";
  className?: string;
};

/**
 * Official NEURALIS logo: the glossy ribbon "N" mark (made for dark surfaces)
 * followed by the live "Neuralis" wordmark with its cyan dot on the "i".
 */
export function Logo({ size = "md", className }: LogoProps) {
  const classes = [styles.logo, size === "md" ? "" : styles[size], className].filter(Boolean).join(" ");

  return (
    <Link href="/" className={classes} aria-label="Retour à l'accueil NEURALIS">
      <span className={styles.markWrap} aria-hidden="true">
        <Image
          src="/brand/neuralis-mark.webp"
          alt=""
          width={288}
          height={288}
          unoptimized
          loading="eager"
          draggable={false}
          className={styles.mark}
        />
      </span>
      <span className={styles.wordmark} aria-hidden="true">
        Neural<span className={styles.i}>i</span>s
      </span>
    </Link>
  );
}
