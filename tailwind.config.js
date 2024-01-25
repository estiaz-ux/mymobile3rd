/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        tomato: "#ff4240",
        gray: {
          "100": "#131318",
          "200": "rgba(19, 19, 24, 0.5)",
          "300": "rgba(19, 19, 24, 0.2)",
          "400": "rgba(19, 19, 24, 0.6)",
          "500": "rgba(19, 19, 24, 0.1)",
          "600": "rgba(19, 19, 24, 0.4)",
          "700": "rgba(19, 19, 24, 0.3)",
          "800": "rgba(19, 19, 24, 0.03)",
          "900": "rgba(255, 255, 255, 0.8)",
          "1000": "rgba(255, 255, 255, 0.6)",
        },
        cornflowerblue: "rgba(98, 156, 243, 0.1)",
        khaki: "rgba(253, 221, 95, 0.1)",
        yellowgreen: "rgba(188, 237, 109, 0.1)",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        inter: "Inter",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "3xl": "22px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
