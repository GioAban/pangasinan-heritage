"use client";
import useHashPath from "@/hooks/useHashPath";
import Link from "next/link";
import { type ReactNode } from "react";
const ClientLink = ({
  children,
  href,
  classNames = "",
}: {
  children: ReactNode;
  href: string;
  classNames?: string;
}) => {
  const hashPathId = useHashPath(); 
  const hashHref = href.replace("#", ""); 
  const isActive = hashPathId === hashHref;
  console.log({ hashPathId, hashHref });
  return (
    <Link
      href={href}
      className={`${classNames} ${isActive ? "underline" : ""}`}
    >
      {children}
    </Link>
  );
};
export default ClientLink;
