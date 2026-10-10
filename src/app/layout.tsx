import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
});

export const metadata: Metadata = {
  title: "ねこのてコラボ -女性V向けコラボ相手紹介所-",
  description: "コラボ相手探し、「ねこのて」お貸しします。中の人が女性の、個人勢VTuberさん限定。β版は無料です。",
  openGraph: {
    title: "ねこのてコラボ -女性V向けコラボ相手紹介所-",
    description: "コラボ相手探し、「ねこのて」お貸しします。中の人が女性の、個人勢VTuberさん限定。β版は無料です。",
    url: "https://*.vercel.app",
    siteName: "ねこのてコラボ",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "ねこのてコラボ OGP画像",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ねこのてコラボ -女性V向けコラボ相手紹介所-",
    description: "コラボ相手探し、「ねこのて」お貸しします。",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={zenMaruGothic.variable}>
      <body>{children}</body>
    </html>
  );
}
