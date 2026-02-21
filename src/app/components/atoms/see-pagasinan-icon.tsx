"use client";
import Image from "next/image";
import LinkNext from "next/link";
import tourGif from "../../../../public/images/gif/tour-icon.gif";
interface LogoProps {
  className?: string;
  href?: string;
}
const SeePangasinanIcon = ({ className = "", href = "/" }: LogoProps) => {
  const logoImage = (
    <Image
      src={tourGif}
      alt="SeePangasinan Logo"
      className={`w-auto object-contain ${className}`}
      unoptimized
      priority
    />
  );
  if (href) {
    return (
      <LinkNext
        href={href}
        className="inline-block transition-opacity hover:opacity-90"
      >
        {logoImage}
      </LinkNext>
    );
  }
  return logoImage;
};
export default SeePangasinanIcon;
