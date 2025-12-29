"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Coffee,
  Zap,
  Heart,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "电子邮箱",
    value: "pm.iot.ai@example.com",
    href: "mailto:pm.iot.ai@example.com",
  },
  {
    icon: Phone,
    label: "联系电话",
    value: "+86 138-xxxx-xxxx",
    href: "tel:+86138xxxxxxxx",
  },
  {
    icon: MapPin,
    label: "所在城市",
    value: "广州 · 深圳",
    href: null,
  },
  {
    icon: Clock,
    label: "响应时间",
    value: "通常 24 小时内回复",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
  { icon: MessageCircle, href: "#", label: "微信", color: "hover:text-green-400" },
  { icon: Mail, href: "mailto:pm.iot.ai@example.com", label: "邮箱", color: "hover:text-red-400" },
];

const chatTopics = [
  { icon: Coffee, text: "产品设计与方法论" },
  { icon: Zap, text: "AI Agent 落地实践" },
  { icon: Heart, text: "IoT 技术趋势" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("消息已发送！感谢您的联系，我会尽快回复您。");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center bg-slate-900/30">
      <div className="max-w-6xl mx-auto w-full">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Send size={18} className="text-blue-400" />
            <span className="text-sm text-slate-300">开启对话</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            联系我
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            期待与您探讨 AI 产品的无限可能，无论是合作机会还是技术交流
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* 左侧 - 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* 联系方式 */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-5">联系方式</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white text-sm hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 社交媒体 */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-5">社交媒体</h3>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 ${link.color} transition-all`}
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 我们可以聊什么 */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-5">我们可以聊什么</h3>
              <div className="space-y-3">
                {chatTopics.map((topic, index) => (
                  <motion.div
                    key={topic.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <topic.icon size={16} className="text-emerald-400" />
                    <span className="text-sm">{topic.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 微信二维码 */}
            <div className="glass p-6 rounded-2xl text-center">
              <h3 className="text-lg font-semibold text-white mb-4">微信联系</h3>
              <div className="w-32 h-32 mx-auto bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-sm border border-white/5">
                二维码占位
              </div>
              <p className="text-slate-500 text-xs mt-3">扫码添加微信，备注来意</p>
            </div>
          </motion.div>

          {/* 右侧 - 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-2">发送消息</h3>
            <p className="text-slate-400 text-sm mb-6">
              填写以下表单，我会尽快与您取得联系
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    您的姓名 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="请输入姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    电子邮箱 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="请输入邮箱"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  邮件主题
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="请输入主题（可选）"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  留言内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="请详细描述您的需求或想法..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
              >
                {isSubmitting ? (
                  "发送中..."
                ) : (
                  <>
                    <Send size={18} />
                    发送消息
                  </>
                )}
              </motion.button>
              <p className="text-slate-500 text-xs text-center">
                您的信息将被严格保密，仅用于回复您的咨询
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
