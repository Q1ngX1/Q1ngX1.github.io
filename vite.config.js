import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // 用户页面仓库使用根路径
  build: {
    // 不将 Markdown 文件作为入口点处理
    rollupOptions: {
      external: ["linear_algebra_cn", "linear_algebra_en"],
    },
  },
});
