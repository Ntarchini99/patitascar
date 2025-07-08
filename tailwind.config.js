module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colourmainblue-900": "var(--colourmainblue-900)",
        "colourmaingrey-600": "var(--colourmaingrey-600)",
        complemento: "var(--complemento)",
        primario: "var(--primario)",
        secundario: "var(--secundario)",
        texto: "var(--texto)",
        "traslados-de-mascotascomarmountain-meadow":
          "var(--traslados-de-mascotascomarmountain-meadow)",
        "traslados-de-mascotascomarscorpion":
          "var(--traslados-de-mascotascomarscorpion)",
        "traslados-de-mascotascomarsurfie-green":
          "var(--traslados-de-mascotascomarsurfie-green)",
        "traslados-de-mascotascomartundora":
          "var(--traslados-de-mascotascomartundora)",
        "traslados-de-mascotascomarwhite":
          "var(--traslados-de-mascotascomarwhite)",
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
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        "medium-36": "var(--medium-36-font-family)",
        "regular-16": "var(--regular-16-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
        titulo: "var(--titulo-font-family)",
        "traslados-de-mascotas-com-ar-inter-regular":
          "var(--traslados-de-mascotas-com-ar-inter-regular-font-family)",
        "traslados-de-mascotas-com-ar-roboto-regular":
          "var(--traslados-de-mascotas-com-ar-roboto-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
  plugins: [require('tailwind-scrollbar-hide')],

};
