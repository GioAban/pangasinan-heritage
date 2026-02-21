"use client";
import { useState, useEffect } from "react";
import Container from "../../container";
import Button from "../atoms/button";
import Link from "next/link";
import SeePangasinanIcon from "../atoms/see-pagasinan-icon";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(true), 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-[#124D9B]/90 shadow-2xl backdrop-blur-md"
          : "bg-[#124D9B]"
      } py-4 lg:py-4`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-12">
          {" "}
          <SeePangasinanIcon className="h-16 transition-transform hover:scale-105 lg:h-20" />
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "Things To Do", href: "/#heritage" },
                { name: "Latest News", href: "/blogs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="px-6 py-2 text-lg font-black uppercase tracking-[0.15em] text-white transition-colors hover:text-blue-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <Button
            href="/contact"
            variant="solid"
            className="!px-10 !py-4 !text-base shadow-xl"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
