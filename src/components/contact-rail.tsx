import Link from "next/link";
import { businessInfo } from "@/lib/business-info";
import { SocialIcon } from "./social-icon";

export function ContactRail() {
  return (
    <Link
      href={`${businessInfo.whatsappUrl}?text=Bonjour%20NEURALIS%2C%20je%20souhaite%20discuter%20d%27un%20projet.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec NEURALIS sur WhatsApp"
      className="contact-rail group"
    >
      <SocialIcon name="WhatsApp" className="h-5 w-5" />
      <span className="hidden sm:inline">Parler de mon projet</span>
    </Link>
  );
}
