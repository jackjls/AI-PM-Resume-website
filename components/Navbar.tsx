"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "教育经历", href: "#education" },
  { label: "工作经历", href: "#experience" },
  { label: "项目展示", href: "#projects" },
  { label: "开源项目", href: "#opensource" },
  { label: "联系我", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full",
          "backdrop-blur-xl border transition-all duration-300",
          isScrolled
            ? "bg-slate-900/80 border-white/10 shadow-lg shadow-blue-500/5"
            : "bg-slate-900/50 border-white/5"
        )}
      >
        {/* 桌面端导航 */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* 移动端菜单按钮 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-4 right-4 z-40 p-6 rounded-2xl glass md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg text-slate-300 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
