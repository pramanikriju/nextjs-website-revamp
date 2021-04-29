module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-blue": {
          DEFAULT: "#5B86E5",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#DFE7FA",
          300: "#B3C7F3",
          400: "#87A6EC",
          500: "#5B86E5",
          600: "#2F66DE",
          700: "#1E4FBC",
          800: "#173D90",
          900: "#102A64",
        },
        "primary-green": {
          DEFAULT: "#36D1DC",
          50: "#F9FEFE",
          100: "#E4F9FA",
          200: "#B8EFF3",
          300: "#8DE5EB",
          400: "#61DBE4",
          500: "#36D1DC",
          600: "#21B4BE",
          700: "#1A8A92",
          800: "#126167",
          900: "#0A383C",
        },
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
    },
  },
  plugins: [],
};
