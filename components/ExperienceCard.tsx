"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  achievements: string[];
  index: number;
}

export default function ExperienceCard({
  period,
  title,
  company,
  achievements,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* 时间轴线 */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-emerald-500 -translate-x-1/2 hidden md:block" />

      {/* 时间轴节点 */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 -translate-x-1/2 z-10 hidden md:block"
      />

      <div
        className={`md:w-[calc(50%-2rem)] ${
          index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="glass glass-hover p-6 rounded-2xl">
          {/* 时间段 */}
          <div className="flex items-center gap-2 text-blue-400 text-sm mb-3">
            <Calendar size={16} />
            <span>{period}</span>
          </div>

          {/* 职位与公司 */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Briefcase size={20} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-slate-400 text-sm">{company}</p>
            </div>
          </div>

          {/* 成就列表 */}
          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + i * 0.1 }}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
