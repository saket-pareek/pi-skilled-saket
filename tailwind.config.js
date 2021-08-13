const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      // To center containers by default
      // center: true,

      // To add horizontal padding by default
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    }),
    extend: {
      backgroundImage: (theme) => ({
        "hero-home": "url('/images/hero-bg.png')",
        "unlock-bg": "url('/images/unlock-potential.png')",
        "hero-mob": "url('/images/hero-mob.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-pseudo-elements"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".empty-content": {
          position: "absolute",
          top: "50%",
          left: "0",
          background: "url(/images/search.svg)",
          width: "50px",
          height: "50px",
        },
        ".skew-10deg": {
          transform: "skewY(-10deg)",
        },
        ".skew-15deg": {
          transform: "skewY(-15deg)",
        },
        ".pi-h-860": {
          height: "860px",
        },
        ".pi-h-vhc": {
          height: "calc(100vh - 175px)",
        },
        ".pi-h-550": {
          height: "550px",
        },
        ".pi-h-450": {
          height: "450px",
        },
        ".pi-h-387": {
          height: "387px",
        },
        ".pi-h-360": {
          height: "360px",
        },
        ".pi-h-320": {
          height: "320px",
        },
        ".pi-h-300": {
          height: "300px",
        },
        ".pi-top-27rem": {
          top: "27rem",
        },
        ".pi-w-480": {
          width: "480px",
        },
        ".pi-ayps-heading": {
          fontStyle: "normal",
          width: "40%",
        },
        ".pi-ayps-text": {
          width: "40%",
          fontStyle: "normal",
          fontWeight: "normal",
        },
        ".pi-ayps-e1": {
          width: "10.48%",
          height: "10.48%",
        },
        ".pi-footer-bgc": {
          backgroundColor: "#f4f7fb",
        },
        ".pi-faq-clr": {
          backgroundColor: "#F1F8E7",
        },
        ".pi-ask-que-clr": {
          backgroundColor: "#F4F7FB",
        },
        ".pi-ask-que-sub-clr": {
          backgroundColor: "#2564AF",
        },
      };
      addUtilities(newUtilities, {
        variants: ["responsive", "before", "after"],
      });
    }),
  ],
};
