"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "产品规划", value: 90 },
  { name: "AI 模型应用", value: 85 },
  { name: "硬件协议", value: 80 },
  { name: "用户洞察", value: 88 },
  { name: "自动化流程", value: 82 },
];

export default function RadarChart() {
  const [isVisible, setIsVisible] = useState(false);
  const centerX = 150;
  const centerY = 150;
  const radius = 100;
  const levels = 5;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // 计算五边形顶点
  const getPoint = (index: number, scale: number = 1) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    return {
      x: centerX + Math.cos(angle) * radius * scale,
      y: centerY + Math.sin(angle) * radius * scale,
    };
  };

  // 生成网格路径
  const generateGridPath = (level: number) => {
    const scale = (level + 1) / levels;
    return skills
      .map((_, i) => {
        const point = getPoint(i, scale);
        return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ") + " Z";
  };

  // 生成数据路径
  const generateDataPath = () => {
    return skills
      .map((skill, i) => {
        const point = getPoint(i, skill.value / 100);
        return `${i === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ") + " Z";
  };

  return (
    <div className="relative w-full max-w-[300px] mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-auto">
        {/* 背景网格 */}
        {[...Array(levels)].map((_, level) => (
          <path
            key={level}
            d={generateGridPath(level)}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* 轴线 */}
        {skills.map((_, i) => {
          const point = getPoint(i);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={point.x}
              y2={point.y}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* 数据区域 */}
        <motion.path
          d={generateDataPath()}
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgb(59, 130, 246)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* 数据点 */}
        {skills.map((skill, i) => {
          const point = getPoint(i, skill.value / 100);
          return (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="rgb(59, 130, 246)"
              stroke="white"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            />
          );
        })}

        {/* 标签 */}
        {skills.map((skill, i) => {
          const point = getPoint(i, 1.35);
          return (
            <motion.text
              key={i}
              x={point.x}
              y={point.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-xs fill-slate-300"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
            >
              {skill.name}
            </motion.text>
          );
        })}
      </svg>
    </div>
  );
}
