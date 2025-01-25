import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0D74CE",
      },
      maxWidth: {
        inner: "90%",
      },
      width: {
        inner: "1100px",
      },
      height: {
        kv: "600px",
        "kv-sm": "400px",
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic ProN"', // ヒラギノ角ゴシック
          "Arial",
          "sans-serif", // フォールバック用
        ],
        en: [
          "Arial",
          "sans-serif",
        ]
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
} satisfies Config;
