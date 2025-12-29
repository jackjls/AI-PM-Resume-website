import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "高级产品经理 | IoT & AI Agent 专家",
  description:
    "连接物理世界与通用人工智能（AGI）的桥梁。3.5年产品实战经验，深耕物联网与 AI Agent 领域。",
  keywords: ["产品经理", "AI", "物联网", "IoT", "AI Agent", "Dify", "n8n"],
  authors: [{ name: "PM" }],
  openGraph: {
    title: "高级产品经理 | IoT & AI Agent 专家",
    description: "连接物理世界与通用人工智能（AGI）的桥梁",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
