"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Article } from "@/types";
import { Card } from "../molecules/card";
import { CarouselButton } from "../atoms/carousel-button";
export default function NewsCarousel({ articles }: { articles: Article[] }) {
  const featured = articles[0];
  const listNews = articles.slice(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const basePath = "/pangasinan-heritage";
  const getPath = (path: string) => {
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
  };
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      containerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  if (!featured) return null;
  return (
    <div className="flex flex-col bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="group relative mb-16 h-[500px] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-100 shadow-sm lg:h-[650px]"
      >
        <Image
          src={getPath(featured.image)}
          alt={featured.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        <div className="absolute bottom-0 p-8 lg:p-16">
          <span className="mb-4 inline-block bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
            Featured
          </span>
          <h3 className="max-w-4xl text-3xl font-bold text-blue-500 md:text-5xl lg:text-6xl">
            {featured.title}
          </h3>
          <p className="mt-4 max-w-2xl text-slate-600 lg:text-lg">
            {featured.description}
          </p>
        </div>
      </motion.div>
      <div className="group relative">
        <div className="absolute -left-5 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
          <CarouselButton direction="left" onClick={() => scroll("left")} />
        </div>
        <div className="absolute -right-5 top-1/2 z-20 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
          <CarouselButton direction="right" onClick={() => scroll("right")} />
        </div>
        <div
          ref={containerRef}
          className="scrollbar-hide flex gap-6 overflow-x-hidden scroll-smooth pb-10"
        >
          {listNews.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card>
                <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={getPath(article.image)}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase text-blue-600">
                  {article.category}
                </p>
                <h4 className="mt-2 line-clamp-2 font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {article.title}
                </h4>
                <p className="mt-2 text-xs text-slate-500">
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
