import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";

export const metadata: Metadata = {
  title: "Sarmad Original Products — Pure Honey, Premium Itter & Desi Ghee",
  description: "Taste the difference — pure honey, handcrafted ittar, and traditional desi ghee. Small-batch, additive-free, and quality guaranteed. Shop now.",
  keywords: "pure honey, ittar, desi ghee, natural honey Pakistan, luxury ittar, buy desi ghee online",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Sarmad Original Products — Pure Honey, Premium Itter & Desi Ghee",
    description: "Taste the difference — pure honey, handcrafted ittar, and traditional desi ghee. Small-batch, additive-free, and quality guaranteed. Shop now.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarmad Original Products",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

