"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Cpu, Wifi } from "lucide-react";
import TypeWriter from "./TypeWriter";

const roles = [
  "我是产品经理",
  "我是 AI 探索者",
  "我是问题解决者",
];

const tags = [
  { icon: Wifi, text: "物联网专家" },
  { icon: Cpu, text: "AI Agent 开发者" },
  { icon: Sparkles, text: "3.5年产品实战" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* 主内容区域 - 左右布局 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* 左侧 - 文字介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* 主标语 */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">连接物理世界与</span>
              <br />
              <span className="gradient-text">通用人工智能 (AGI)</span>
              <br />
              <span className="text-white">的桥梁</span>
            </h1>

            {/* 打字机效果 */}
            <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-10 lg:h-12">
              <TypeWriter texts={roles} />
            </div>

            {/* 个人标签 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10"
                >
                  <tag.icon size={18} className="text-blue-400" />
                  <span className="text-sm text-slate-300">{tag.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
              href="#education"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              了解更多
            </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
              >
                联系我
              </a>
            </div>
          </motion.div>

          {/* 右侧 - 形象照 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* 发光背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-full blur-2xl" />
              
              {/* 形象照容器 */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/avatar.png"
                  alt="个人形象照"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* 装饰环 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border-2 border-dashed border-blue-500/20 rounded-full"
              />
            </div>

            {/* 形象照下方简介 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center text-slate-400 text-sm mt-6 max-w-xs mx-auto"
            >
              专注于 IoT 与 AI 的深度融合，用技术驱动产品创新
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
