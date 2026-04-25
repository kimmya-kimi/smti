import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMTI乱世人格测试｜测你的历史原型",
  description: "MBTI过时了，来测你的历史原型。20道疯癫情景题，生成你的SMTI乱世人格档案。",
  openGraph: {
    title: "SMTI乱世人格测试｜测你的历史原型",
    description: "MBTI过时了，来测你的历史原型。20道疯癫情景题，生成你的SMTI乱世人格档案。",
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
