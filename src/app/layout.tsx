import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Pangasinan Heritage",
  description:
    "Pangasinan Heritage is a website dedicated to showcasing the rich cultural heritage of the Pangasinan region in the Philippines. It features information about the history, traditions, festivals, and notable landmarks of Pangasinan, providing visitors with a comprehensive guide to explore and appreciate the unique heritage of this vibrant region. The website aims to promote awareness and appreciation of Pangasinan's cultural identity, fostering a deeper connection between locals and tourists alike. Through engaging content, stunning visuals, and interactive features, Pangasinan Heritage invites users to embark on a virtual journey through the heart of Pangasinan's cultural tapestry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}> {children}</body>
    </html>
  );
}
