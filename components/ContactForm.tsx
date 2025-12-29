"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Linkedin, Github, Mail, GraduationCap } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("消息已发送！感谢您的联系。");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            教育背景 & 联系我
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            期待与您探讨 AI 产品的无限可能
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 教育背景 + 社交链接 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* 教育背景卡片 */}
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <GraduationCap size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">教育背景</h3>
                  <p className="text-slate-400 text-sm">学士学位</p>
                </div>
              </div>
              <div className="pl-15">
                <p className="text-white font-medium">某知名理工科大学</p>
                <p className="text-slate-400 text-sm">计算机科学与技术</p>
              </div>
            </div>

            {/* 社交链接 */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">
                社交媒体
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* 微信二维码占位 */}
            <div className="glass p-6 rounded-2xl text-center">
              <h3 className="text-lg font-semibold text-white mb-4">
                微信联系
              </h3>
              <div className="w-32 h-32 mx-auto bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-sm">
                二维码占位
              </div>
              <p className="text-slate-400 text-sm mt-3">扫码添加微信</p>
            </div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-white mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  您的姓名
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
                  电子邮箱
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
              <div>
                <label className="block text-sm text-slate-400 mb-2">
                  留言内容
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="请输入您想说的话..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
