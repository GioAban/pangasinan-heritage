import Link from "next/link";
import { ReactNode } from "react";
export const FooterIcon = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <Link
    href={href}
    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20"
    target="_blank"
  >
    {children}
  </Link>
);
