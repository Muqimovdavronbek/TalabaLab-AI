import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: "TalabaLab AI — shaxsiy o‘quv yordamchisi",
  description: "Universitet fanlari, tushunarli yechimlar, aniq hisoblash va tahrirlanadigan hujjatlar.",
  manifest: '/manifest.webmanifest',
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
