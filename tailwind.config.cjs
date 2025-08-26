/** @type {import('tailwindcss').Config} */

// HSL CSS değişkenlerini Tailwind renklerine bağlamak için yardımcı
const withVar = (name) => ({
  50:  `hsl(var(--${name}-50))`,
  100: `hsl(var(--${name}-100))`,
  200: `hsl(var(--${name}-200))`,
  300: `hsl(var(--${name}-300))`,
  400: `hsl(var(--${name}-400))`,
  500: `hsl(var(--${name}-500))`,
  600: `hsl(var(--${name}-600))`,
  700: `hsl(var(--${name}-700))`,
  800: `hsl(var(--${name}-800))`,
  900: `hsl(var(--${name}-900))`,
});

module.exports = {
  darkMode: "class",
  // Tailwind v4 + Turbopack: content tanımlamıyoruz (otomatik tarıyor)
  theme: {
    extend: {
      colors: {
        primary: withVar("primary"),
        secondary: withVar("secondary"),
        green: withVar("green"),
        orange: withVar("orange"),
        textc: withVar("text"),
        darker: withVar("darker"),
        // role-based kısa adlar (bg-bg, text-fg, bg-card, bg-bg-soft)
        bg: "hsl(var(--bg))",
        "bg-soft": "hsl(var(--bg-soft))",
        card: "hsl(var(--card))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
      },
      fontFamily: {
        // next/font ile layout’ta verdiğimiz değişkenleri kullanıyoruz
        sans: ["var(--font-sans)"],
        alt: ["var(--font-alt)"],
        display: ["var(--font-display)"],
      },
      fontSize: {
        h1: "38px",
        h2: "30px",
        h3: "24px",
        h4: "20px",
        h5: "18px",
        h6: "16px",
        "p-lg": "16px",
        p: "14px",
        "p-sm": "12px",
      },
      borderRadius: { xl2: "1.25rem" },     // rounded-xl2
      boxShadow: { card: "0 10px 30px rgba(0,0,0,.25)" }, // shadow-card
    },
  },
  plugins: [],
};
