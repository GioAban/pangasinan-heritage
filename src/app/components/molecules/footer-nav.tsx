import Link from "next/link";
const links = [
  { name: "Home", href: "#about" },
  { name: "Things To Do", href: "#" },
  { name: "Where to Go", href: "#" },
  { name: "Latest News", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];
export const FooterNav = () => (
  <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/90">
    {links.map((link) => (
      <Link
        key={link.name}
        href={link.href}
        className="transition-colors hover:text-white"
      >
        {link.name}
      </Link>
    ))}
  </nav>
);
