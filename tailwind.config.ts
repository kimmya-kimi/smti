import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07070b",
        ember: "#ff4d6d",
        gold: "#f7c35f",
        neon: "#54f2c3",
        violet: "#9c6bff",
        mist: "#ddd6fe",
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(247,195,95,0.22), 0 0 30px rgba(156,107,255,0.18), 0 0 60px rgba(84,242,195,0.12)",
        card: "0 18px 60px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(255,77,109,0.22), transparent 35%), radial-gradient(circle at top right, rgba(156,107,255,0.2), transparent 30%), radial-gradient(circle at bottom, rgba(84,242,195,0.16), transparent 28%)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
        riseIn: "riseIn 0.6s ease-out both",
        shimmer: "shimmer 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", filter: "blur(24px)" },
          "50%": { opacity: "1", filter: "blur(34px)" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
