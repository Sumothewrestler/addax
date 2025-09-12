import type { Metadata } from "next";
import { Racing_Sans_One, Bruno_Ace_SC, Bruno_Ace } from "next/font/google";
import "./globals.css";

const racingSansOne = Racing_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-racing-sans-one",
});

const brunoAceSC = Bruno_Ace_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace-sc",
});

const brunoAce = Bruno_Ace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace",
});

export const metadata: Metadata = {
  title: "ADDAX AUTOMOTIVE - Professional Car Service Center",
  description: "Professional automotive services in Chennai. Car repair, AC service, denting & painting, insurance claim assistance. 24/7 availability in Vanagaram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${racingSansOne.variable} ${brunoAceSC.variable} ${brunoAce.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
