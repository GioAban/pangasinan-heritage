"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { FooterNav } from "../molecules/footer-nav";
import { FooterIcon } from "../atoms/footer-icon";
import SeePangasinanIcon from "../atoms/see-pagasinan-icon";
import ProvincialLogoIcon from "../atoms/provincial-logo-icon";
interface Article {
  id: string | number;
  title: string;
  slug?: string;
}
interface FooterProps {
  articles?: Article[]; 
}
const Footer = ({ articles = [] }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#1e73be] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex items-center gap-6">
            <div className="relative flex items-center justify-center">
              <SeePangasinanIcon className="h-16 w-16" />
            </div>
            <div className="hidden h-16 w-[1px] bg-white/20 lg:block" />
            <div className="relative flex items-center justify-center">
              <ProvincialLogoIcon className="h-16 w-16" />
            </div>
          </div>
          <FooterNav />
          <div className="flex gap-4">
            <FooterIcon href="https://facebook.com">
              <Facebook size={20} />
            </FooterIcon>
            <FooterIcon href="https://instagram.com">
              <Instagram size={20} />
            </FooterIcon>
            <FooterIcon href="https://youtube.com">
              <Youtube size={20} />
            </FooterIcon>
          </div>
        </div>
        {articles.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-[10px] opacity-40">
            {articles.slice(0, 3).map((art) => (
              <span key={art.id}>{art.title}</span>
            ))}
          </div>
        )}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/70">
          <p>
            © {currentYear} Pangasinan Provincial Tourism and Cultural Affairs
            Office (PTCAO). All Rights Reserved.
          </p>
          <p className="mt-2 uppercase tracking-widest opacity-50">
            Branding and Website by MITS02a Heritage Team
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
