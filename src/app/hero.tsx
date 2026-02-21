"use client";
import { useState, useEffect } from "react";
import Button from "./components/atoms/button";
import Container from "./container";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import image1 from "../../public/images/cover_page/hundred_island.jpg";
import image2 from "../../public/images/cover_page/bolinao_light_house.jpg";
import image3 from "../../public/images/cover_page/hostrping.jpg";
const images = [image1, image2, image3];
const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt="Pangasinan Destination"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <Container className="relative z-10 w-full pt-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-2 backdrop-blur-md"
          >
            <span className="text-xs font-black uppercase tracking-[0.4em] text-white">
              Discover the Salt Capital
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 max-w-5xl text-[clamp(3rem,10vw,7rem)] font-black leading-[0.95] tracking-tighter text-white drop-shadow-2xl"
          >
            PANGASINAN <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              HERITAGE
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-slate-100 md:text-2xl lg:text-3xl"
          >
            Preserving our past,{" "}
            <span className="italic text-white underline decoration-blue-500 underline-offset-8">
              embracing our future
            </span>
            . Dive into the culture of the north.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-5 sm:flex-row"
          >
            <Button href="/blogs" variant="solid">
              READ OUR BLOGS
            </Button>
            <Button href="/#heritage" variant="outline">
              EXPLORE SITES
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
export default HomeHero;
