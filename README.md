# 🚀 AI PM Portfolio - 高级产品经理个人简历模板

一个现代化的**开源个人简历网站模板**，专为产品经理、开发者和技术从业者设计。采用 Next.js 14+ 构建，支持本地部署和自定义修改，快速打造属于你的专业个人品牌网站。

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ 特性

- 🌙 **暗黑模式** - 默认深色主题，科技感十足
- 🎨 **玻璃拟态** - 现代 Glassmorphism 设计风格
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 🎬 **丝滑动画** - Framer Motion 驱动的流畅交互
- ⚡ **极速加载** - Next.js App Router + Turbopack
- 🛠️ **易于定制** - 模块化组件，内容易修改

## 📸 预览

### 首页 Hero 区域
- 左侧文字介绍 + 右侧个人形象照
- 打字机效果循环展示角色
- 五维能力雷达图动画

### 功能模块
| 模块 | 描述 |
|------|------|
| 🎓 教育经历 | 学历信息、荣誉成就、核心课程、学术项目 |
| 💼 工作经历 | 交互式时间轴，玻璃拟态卡片 |
| 🤖 AI 项目展示 | Bento Box 网格布局，悬停发光效果 |
| 📦 开源项目 | GitHub 统计 + 项目卡片 |
| 📬 联系我 | 联系方式、社交媒体、消息表单 |

## 🚀 快速开始

### 环境要求

- Node.js 18.0+
- npm / yarn / pnpm

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/ai-pm-portfolio.git
cd ai-pm-portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 生产构建

```bash
npm run build
npm start
```

## 📂 项目结构

```
ai-pm-portfolio/
├── app/
│   ├── globals.css      # 全局样式、玻璃拟态、动画
│   ├── layout.tsx       # 布局、字体、SEO
│   └── page.tsx         # 首页（组装所有 Section）
├── components/
│   ├── Navbar.tsx       # 浮动导航栏
│   ├── Hero.tsx         # 首页 Hero 区域
│   ├── TypeWriter.tsx   # 打字机效果
│   ├── RadarChart.tsx   # 五维能力雷达图
│   ├── Education.tsx    # 教育经历 Section
│   ├── ExperienceCard.tsx  # 工作经历卡片
│   ├── ProjectCard.tsx  # AI 项目卡片
│   ├── OpenSource.tsx   # 开源项目 Section
│   └── Contact.tsx      # 联系我 Section
├── lib/
│   └── utils.ts         # 工具函数
├── public/
│   └── avatar.png       # 个人头像
└── doc/
    └── 开发进展.md       # 开发文档
```

## 🎨 自定义指南

### 修改个人信息

1. **Hero 区域** - 编辑 `components/Hero.tsx`
   - 修改 Slogan、个人标签、打字机文本

2. **教育经历** - 编辑 `components/Education.tsx`
   - 修改学校、专业、荣誉、课程

3. **工作经历** - 编辑 `app/page.tsx` 中的 `experiences` 数组

4. **AI 项目** - 编辑 `app/page.tsx` 中的 `projects` 数组

5. **开源项目** - 编辑 `components/OpenSource.tsx`
   - 修改 `openSourceProjects` 和 `githubStats`

6. **联系方式** - 编辑 `components/Contact.tsx`

### 修改样式

- **配色方案** - 编辑 `app/globals.css` 中的 CSS 变量
- **主色**: `#0f172a` (深灰蓝)
- **强调色**: `#3b82f6` (赛博蓝)
- **点缀色**: `#10b981` (翡翠绿)

### 替换头像

将你的头像图片替换 `public/avatar.png`。

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| [Next.js 16](https://nextjs.org/) | React 框架，App Router |
| [React 19](https://react.dev/) | UI 库 |
| [Tailwind CSS](https://tailwindcss.com/) | 原子化 CSS |
| [Framer Motion](https://www.framer.com/motion/) | 动画库 |
| [Lucide React](https://lucide.dev/) | 图标库 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |

## 📄 License

本项目基于 [MIT License](LICENSE) 开源，欢迎自由使用和修改。

## 🙏 致谢

如果这个模板对你有帮助，欢迎 ⭐ Star 支持！

---

**Made with ❤️ by a Product Manager who loves AI & IoT**
