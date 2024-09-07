/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        Navcolor: "#7C99C1",
        font: "#202327",
        bgnav: "#E8F1FC",
        textnav: "#1450A3",
        main: "#F7F7F7",
      },
      fontFamily: {
        Head: ["Lato", "sans-serif"],
        IBM: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        status: "0px 4px 17.6px 0px rgba(0, 0, 0, 0.08)",
        Navstatus: "0px 4px 9.5px -1px rgba(36, 104, 147, 0.08)",
        obj: "0px 4px 10.9px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
