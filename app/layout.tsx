import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Plus Jakarta Sans bhi use kar sakte ho for more tech feel
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI MasterHub | Premium Prompts & Tools",
  description: "Curated collection of the best AI tools and prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#F3F4F6]`}>
        {children}
      </body>
    </html>
  );
}
