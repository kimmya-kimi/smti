import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMTI｜测你的历史原型",
  description: "MBTI过时了，来测你的历史原型。20道疯癫情景题，生成你的SMTI档案。",
  openGraph: {
    title: "SMTI｜测你的历史原型",
    description: "MBTI过时了，来测你的历史原型。20道疯癫情景题，生成你的SMTI档案。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
