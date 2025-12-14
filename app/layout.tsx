import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GGC | The Digital Standard for Gold",
  description: "The stability of Ghana's gold reserves meets the speed of modern finance. Send, save, and spend real gold instantly with GGC.",
  keywords: "Ghana Gold, GGC, digital gold, cryptocurrency, blockchain, gold token",
  authors: [{ name: "Ghana Gold Company" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
      </head>
      <body className={`${inter.className} bg-neutral-950 text-neutral-400 font-sans antialiased selection:bg-gold-500/20 selection:text-gold-200 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
