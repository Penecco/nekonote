"use client";

import { useState, useEffect } from "react";

export default function FixedButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px 以上スクロールしたら表示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // 初期状態のチェック
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed-btn-wrap fade-in">
      <a
        href="https://forms.gle/yM8mR5QV33onhNWY7"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{ padding: "10px 20px", minHeight: "auto" }}
      >
        無料で申し込む（β版）
      </a>
    </div>
  );
}
