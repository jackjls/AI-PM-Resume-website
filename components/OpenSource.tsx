"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Code2 } from "lucide-react";

// 开源项目数据 - 可自行修改
const openSourceProjects = [
  {
    name: "ai-knowledge-base",
    description: "基于 Dify 的企业级多源知识库助手，支持 RAG 检索增强生成，实现智能文档问答。",
    language: "Python",
    languageColor: "#3572A5",
    stars: 128,
    forks: 32,
    url: "https://github.com/username/ai-knowledge-base",
  },
  {
    name: "n8n-automation-workflows",
    description: "自媒体运营自动化工作流集合，包含热点监控、内容生成、多平台发布等模板。",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 89,
    forks: 21,
    url: "https://github.com/username/n8n-automation-workflows",
  },
  {
    name: "iot-gateway-sdk",
    description: "物联网网关开发套件，支持 Modbus、BACnet 等协议，快速接入智能设备。",
    language: "Go",
    languageColor: "#00ADD8",
    stars: 256,
    forks: 67,
    url: "https://github.com/username/iot-gateway-sdk",
  },
  {
    name: "prd-generator",
    description: "AI 辅助产品需求文档生成器，基于 LLM 自动生成结构化 PRD，支持模板定制。",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 45,
    forks: 12,
    url: "https://github.com/username/prd-generator",
  },
  {
    name: "device-diagnosis-ml",
    description: "IoT 设备智能诊断机器学习模型，基于时序数据的异常检测和故障预测。",
    language: "Python",
    languageColor: "#3572A5",
    stars: 78,
    forks: 19,
    url: "https://github.com/username/device-diagnosis-ml",
  },
  {
    name: "smart-home-panel",
    description: "智能家居控制面板 Web 应用，支持设备管理、场景联动、数据可视化。",
    language: "Vue",
    languageColor: "#41b883",
    stars: 112,
    forks: 28,
    url: "https://github.com/username/smart-home-panel",
  },
];

// GitHub 统计数据
const githubStats = {
  totalStars: 708,
  totalForks: 179,
  totalRepos: 24,
  contributions: "1,200+",
};

export default function OpenSource() {
  return (
    <section id="opensource" className="min-h-screen py-20 px-4 flex items-center bg-slate-900/30">
      <div className="max-w-6xl mx-auto w-full">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Github size={18} className="text-white" />
            <span className="text-sm text-slate-300">代码即创造</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            开源项目
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            用代码解决真实问题，积极参与开源社区，分享技术实践
          </p>
        </motion.div>

        {/* GitHub 统计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: "Total Stars", value: githubStats.totalStars, icon: Star },
            { label: "Total Forks", value: githubStats.totalForks, icon: GitFork },
            { label: "Repositories", value: githubStats.totalRepos, icon: Code2 },
            { label: "Contributions", value: githubStats.contributions, icon: Github },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass p-4 rounded-xl text-center"
            >
              <stat.icon size={20} className="text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-500 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 项目卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {openSourceProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="group glass p-5 rounded-xl cursor-pointer will-change-transform transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* 项目头部 */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Code2 size={18} className="text-blue-400" />
                  <span className="text-white font-medium transition-colors duration-200 group-hover:text-blue-400">
                    {project.name}
                  </span>
                </div>
                <ExternalLink size={14} className="text-slate-500 transition-colors duration-200 group-hover:text-blue-400" />
              </div>

              {/* 描述 */}
              <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* 底部信息 */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: project.languageColor }}
                  />
                  <span className="text-slate-400">{project.language}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {project.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub 链接 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-all"
          >
            <Github size={18} />
            查看更多项目
          </a>
        </motion.div>
      </div>
    </section>
  );
}
