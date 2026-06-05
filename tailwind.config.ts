import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-deep": "var(--bg-deep)",
        purple: {
          900: "var(--purple-900)",
          500: "var(--purple-500)",
          300: "var(--purple-300)",
        },
        green: {
          900: "var(--green-900)",
          500: "var(--green-500)",
          300: "var(--green-300)",
        },
        "text-muted": "var(--text-muted)",
        glass: "var(--glass)",
      },
      borderRadius: {
        phone: "2.5rem",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
} satisfies Config;
