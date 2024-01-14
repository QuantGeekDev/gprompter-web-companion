import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "@/components/component/navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "GPrompTer Web",
  description: "Companion website for the GPrompTer extension",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
