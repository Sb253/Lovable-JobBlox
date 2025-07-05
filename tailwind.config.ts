
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Fira Code", "monospace"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced vibrant colors for both modes (no yellow)
        vibrant: {
          purple: "#8B5CF6",
          blue: "#3B82F6", 
          green: "#10B981",
          coral: "#FF6B6B",
          red: "#EF4444",
          pink: "#EC4899",
          indigo: "#6366F1",
          cyan: "#06B6D4",
          orange: "#F97316",
          lime: "#84CC16",
          emerald: "#059669",
          teal: "#0D9488",
          violet: "#7C3AED",
          fuchsia: "#C026D3",
          rose: "#F43F5E",
          amber: "#D97706",
        },
        // Dark mode vibrant colors (no yellow)
        "vibrant-dark": {
          purple: "#A78BFA",
          blue: "#60A5FA",
          green: "#34D399", 
          coral: "#FF8E8E",
          red: "#F87171",
          pink: "#F472B6",
          indigo: "#818CF8",
          cyan: "#22D3EE",
          orange: "#FB923C",
          lime: "#A3E635",
          emerald: "#6EE7B7",
          teal: "#5EEAD4",
          violet: "#8B5CF6",
          fuchsia: "#E879F9",
          rose: "#FB7185",
          amber: "#FCD34D",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      minHeight: {
        'touch-target': '44px',
      },
      minWidth: {
        'touch-target': '44px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            transform: "translateY(100%)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Mobile-first utilities
    function({ addUtilities }: any) {
      const newUtilities = {
        '.safe-area-inset-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-area-inset-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-area-inset-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-area-inset-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        '.touch-target': {
          minHeight: '44px',
          minWidth: '44px',
        },
        '.mobile-scroll': {
          '-webkit-overflow-scrolling': 'touch',
          'scroll-behavior': 'smooth',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
