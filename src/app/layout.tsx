import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "taily - 中小ECのための経営羅針盤",
  description: "tailyは、年商数千万円から15億円程度のEC事業者様向けに開発されたSKU別利益分析ツールです。",
  icons: [
    { rel: "icon", url: "/taily-logo.ico" },
    { rel: "icon", url: "/taily-logo.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/taily-logo.svg" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
