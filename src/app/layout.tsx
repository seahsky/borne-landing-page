import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Borne | Luxury Postpartum Wellness Hotel, Sydney",
  description:
    "Australia's first luxury postpartum wellness hotel. Five transformative days of expert care, nourishment, and uninterrupted sleep at the InterContinental Double Bay.",
  openGraph: {
    title: "Borne | Luxury Postpartum Wellness Hotel, Sydney",
    description:
      "Australia's first luxury postpartum wellness hotel. Five transformative days of expert care, nourishment, and uninterrupted sleep at the InterContinental Double Bay.",
    type: "website",
    locale: "en_AU",
    siteName: "Borne",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
