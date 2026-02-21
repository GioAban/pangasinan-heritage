"use client";
import { useRef } from "react";
import { CarouselButton } from "../atoms/carousel-button";
interface Props {
  title: string;
  badge: string;
  children: React.ReactNode;
}
export default function GenericCarousel({ title, badge, children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const offset = dir === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  return (
    <section className="py-12">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            {badge}
          </span>
          <h2 className="text-3xl font-bold text-blue-600 lg:text-5xl">
            {title}
          </h2>
        </div>
        <div className="flex gap-2">
          <CarouselButton direction="left" onClick={() => scroll("left")} />
          <CarouselButton direction="right" onClick={() => scroll("right")} />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
      >
        {children}
      </div>
    </section>
  );
}
