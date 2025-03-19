"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import modeStore from "@/store/darkModeStore";
import { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  const darkMode = modeStore((state) => state.darkMode);
  const toggleDarkMode = modeStore((state) => state.toggleDarkMode);

  // 다크모드 초기화 (localStorage에서 값 가져오기)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      modeStore.setState({ darkMode: true });
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // 다크모드 상태 변경 시 Tailwind 클래스 추가/제거
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-16 right-16  p-4 w-18 h-18 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold z-10"
      >
        {darkMode ? <RiSunFill /> : <RiMoonClearFill />}
      </button>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default Provider;
