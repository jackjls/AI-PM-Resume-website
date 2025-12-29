"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypeWriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTyping = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      // 打字阶段
      if (displayText.length < currentText.length) {
        setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // 完成打字，暂停后开始删除
        setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      // 删除阶段
      if (displayText.length > 0) {
        setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // 完成删除，切换到下一个文本
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, 50);
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-flex items-center"
    >
      <span className="gradient-text">{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 w-0.5 h-8 bg-blue-500"
      />
    </motion.span>
  );
}
