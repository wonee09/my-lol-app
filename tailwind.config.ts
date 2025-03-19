import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#af2a1e", // 기본(primary) 색상
          dark: "#f23a29", // 다크모드에서의 primary 색상
        },
        background: {
          light: "#f1f1f1", // 라이트 모드 배경색
          dark: "#303030", // 다크 모드 배경색
        },
        text: {
          light: "#1f2937", // 라이트 모드 텍스트 색상
          dark: "#e5e7eb", // 다크 모드 텍스트 색상
        },
      },
      fontFamily: {
        chosun: ["var(--font-chosun)"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
