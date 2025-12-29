"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import OpenSource from "@/components/OpenSource";
import { Briefcase, Cpu } from "lucide-react";

// 工作经历数据
const experiences = [
  {
    period: "2023.03 – 至今",
    title: "高级产品经理",
    company: "某领先物联网科技公司",
    achievements: [
      "主导水机空调网关重构，提升点位支持 200%",
      "孵化 AI 智能维保助手，通过 RAG 技术降低 60% 售后排查耗时",
      "推动多模态 AI 在设备诊断场景的落地应用",
    ],
  },
  {
    period: "2021.07 – 2023.02",
    title: "产品经理",
    company: "某智能家居初创企业",
    achievements: [
      "从 0 到 1 定义 Wi-Fi 智能网关，年销量 10W+",
      "配网成功率从 82% 优化至 96%",
      "搭建设备全生命周期管理系统",
    ],
  },
];

// AI 项目数据
const projects = [
  {
    title: "基于 Dify 的企业级多源知识库助手",
    description:
      "解决 PM 调研场景下的信息碎片化问题，设计分段清洗策略优化检索精度。支持多数据源接入，实现知识的统一管理与智能检索。",
    tags: ["Dify", "GPT-4o", "Vector DB", "RAG"],
  },
  {
    title: "n8n 自动化自媒体运营工作流",
    description:
      "实现热点监控到多平台自动发布的全闭环，单条内容生产提效 90%。集成多个内容平台 API，自动化内容生成、审核与发布。",
    tags: ["n8n", "Claude 3.5", "Automation", "API"],
  },
  {
    title: "IoT 设备智能诊断系统",
    description:
      "基于设备运行数据的 AI 预测性维护方案，降低设备故障率 40%。结合时序分析与异常检测算法，实现故障预警。",
    tags: ["IoT", "Time Series", "ML", "Edge AI"],
  },
  {
    title: "AI 辅助 PRD 生成器",
    description:
      "利用 LLM 自动生成产品需求文档，提升 PM 日常工作效率。支持模板定制、多格式导出，覆盖产品规划全流程。",
    tags: ["LLM", "Prompt Engineering", "Workflow"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 教育经历 Section */}
      <Education />

      {/* 工作经历 Section */}
      <section id="experience" className="min-h-screen py-20 px-4 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Briefcase size={18} className="text-blue-400" />
              <span className="text-sm text-slate-300">职业旅程</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              工作经历
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              从智能家居到工业物联网，持续探索 AI 与硬件的融合边界
            </p>
          </motion.div>

          <div className="relative space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.period}
                period={exp.period}
                title={exp.title}
                company={exp.company}
                achievements={exp.achievements}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI 项目展示 Section */}
      <section id="projects" className="min-h-screen py-20 px-4 flex items-center bg-slate-900/50">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Cpu size={18} className="text-emerald-400" />
              <span className="text-sm text-slate-300">AI 实践</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI 项目展示
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              用 AI 工具链解决真实业务问题，从概念验证到生产落地
            </p>
          </motion.div>

          {/* Bento Box 网格布局 */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 开源项目 Section */}
      <OpenSource />

      {/* 联系我 Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} 高级产品经理 | IoT & AI Agent 专家
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </main>
  );
}
