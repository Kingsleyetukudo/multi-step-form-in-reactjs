/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubtuntu: "'Ubuntu', sans-serif",
      },
      colors: {
        "Cool-gray": "hsl(231, 11%, 63%)",
        "Light-gray": "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
        "Marine-blue": "hsl(213, 96%, 18%)",
        "Purplish-blue": "hsl(243, 100%, 62%)",
        "Pastel-blue": "hsl(228, 100%, 84%)",
        "Light-blue": "hsl(206, 94%, 87%)",
        "Strawberry-red": "hsl(354, 84%, 57%)",
      },
      backgroundImage: {
        "desktop-bg": "url('./assets/bg-sidebar-desktop.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    // height: {
    //   568: "568px",
    // },

    gridTemplateColumns: {
      2: "274px 1fr",
      3: "1fr 1fr 1fr",
    },
  },
  plugins: [],
};
