import "./globals.css";
import type { Metadata } from "next";
import { Anybody } from "next/font/google";

const anybody = Anybody({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google Clone Next js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={anybody.className}>{children}</body>
    </html>
  );
}
