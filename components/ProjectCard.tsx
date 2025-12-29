"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      {/* 发光边框效果 */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

      <div className="relative glass p-6 rounded-2xl h-full flex flex-col group-hover:bg-slate-800/80 transition-colors duration-300">
        {/* 头部 */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink size={18} className="text-blue-400" />
          </motion.div>
        </div>

        {/* 描述 */}
        <p className="text-slate-400 text-sm mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 + 0.2 + i * 0.05 }}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
