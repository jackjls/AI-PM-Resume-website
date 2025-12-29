"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, Trophy, Users, Code, Lightbulb } from "lucide-react";

// 教育数据
const educationData = {
  degree: {
    school: "华南理工大学",
    major: "计算机科学与技术",
    degree: "工学学士",
    period: "2017.09 - 2021.06",
    gpa: "3.7/4.0",
  },
  achievements: [
    {
      icon: Trophy,
      title: "优秀毕业生",
      description: "综合排名前 5%",
    },
    {
      icon: Award,
      title: "国家奖学金",
      description: "2019-2020 学年",
    },
    {
      icon: Users,
      title: "学生会技术部长",
      description: "技术项目策划执行",
    },
    {
      icon: Lightbulb,
      title: "创新创业大赛",
      description: "省级二等奖",
    },
  ],
  courses: [
    "数据结构与算法",
    "计算机网络",
    "嵌入式系统",
    "人工智能导论",
    "软件工程",
    "数据库系统",
    "物联网技术",
    "机器学习基础",
  ],
  projects: [
    {
      name: "智能家居控制系统",
      description: "基于 Arduino 和 ESP8266 的家居自动化原型，支持语音控制和手机远程操控",
      role: "项目负责人",
      tech: ["Arduino", "ESP8266", "MQTT"],
    },
    {
      name: "校园导航小程序",
      description: "微信小程序，集成校园地图、建筑信息查询和路径规划功能",
      role: "全栈开发",
      tech: ["微信小程序", "Node.js", "MongoDB"],
    },
  ],
};

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <GraduationCap size={18} className="text-emerald-400" />
            <span className="text-sm text-slate-300">学术背景</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            教育经历
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            扎实的计算机科学基础，为产品创新提供技术支撑
          </p>
        </motion.div>

        {/* 主要学历卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass glass-hover p-8 rounded-2xl mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {educationData.degree.school}
                </h3>
                <p className="text-lg text-blue-400 mb-2">
                  {educationData.degree.major}
                </p>
                <p className="text-slate-400">{educationData.degree.degree}</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar size={16} />
                <span>{educationData.degree.period}</span>
              </div>
              <div className="text-emerald-400 font-medium">
                GPA: {educationData.degree.gpa}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 荣誉成就 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {educationData.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass glass-hover p-5 rounded-2xl text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <achievement.icon size={20} className="text-blue-400" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                {achievement.title}
              </h4>
              <p className="text-slate-500 text-xs">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 核心课程与学术项目 */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 核心课程 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <BookOpen size={20} className="text-blue-400" />
              <h3 className="text-lg font-semibold text-white">核心课程</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {educationData.courses.map((course, index) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.03 }}
                  className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-sm border border-white/5"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 学术项目 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass p-6 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <Code size={20} className="text-emerald-400" />
              <h3 className="text-lg font-semibold text-white">学术项目</h3>
            </div>
            <div className="space-y-4">
              {educationData.projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border-l-2 border-emerald-500/50 pl-4"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <h4 className="text-sm font-medium text-white">
                      {project.name}
                    </h4>
                    <span className="px-2 py-0.5 text-xs rounded bg-emerald-500/20 text-emerald-400">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-slate-500">
                        #{t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
