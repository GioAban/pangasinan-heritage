"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Article } from "@/types";
import GenericCarousel from "../../components/organisms/generic-carousel";
export default function BlogsPageClient({ articles }: { articles: Article[] }) {
  const featured = articles[0];
  const listNews = articles.slice(1);
  const basePath = "/pangasinan-heritage";
  const getPath = (path: string) => {
    if (!path) return "";
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${basePath}/${cleanPath}`;
  };
  if (!featured) return null;
  return (
    <div className="space-y-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="group relative h-[600px] w-full overflow-hidden rounded-[3rem] shadow-2xl lg:h-[750px]"
      >
        <Image
          src={getPath(featured.image)}
          alt={featured.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="mb-6 inline-block rounded-full bg-blue-600 px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-white">
              Highlight Story
            </span>
            <h3 className="max-w-5xl text-4xl font-black leading-[0.9] tracking-tighter text-white md:text-6xl lg:text-8xl">
              {featured.title}
            </h3>
            <p className="mt-8 max-w-2xl text-lg font-medium text-slate-200 lg:text-2xl">
              {featured.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div className="pb-20">
        <GenericCarousel title="Latest Stories" badge="The Archive">
          {listNews.map((article) => (
            <div
              key={article.id}
              className="w-[350px] flex-shrink-0 lg:w-[450px]"
            >
              <div className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-slate-100">
                  <Image
                    src={getPath(article.image)}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      {article.category || "General"}
                    </span>
                    <span className="h-[1px] w-8 bg-slate-200" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {new Date(article.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 lg:text-3xl">
                    {article.title}
                  </h4>
                  <p className="line-clamp-2 leading-relaxed text-slate-500">
                    {article.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </GenericCarousel>
      </div>
    </div>
  );
}
