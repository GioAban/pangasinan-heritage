"use client";
import Image from "next/image";
import LinkNext from "next/link";
import tourGif from "../../../../public/pangasinan-provincial-icon.svg";
interface LogoProps {
  className?: string;
  href?: string;
}
const ProvincialLogoIcon = ({ className = "", href = "/" }: LogoProps) => {
  const logoImage = (
    <Image
      src={tourGif}
      alt="Provincial Logo"
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
export default ProvincialLogoIcon;
