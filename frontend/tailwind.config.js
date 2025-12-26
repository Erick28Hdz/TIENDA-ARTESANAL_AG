/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],

  safelist: [
    "text-[25px]",
    "text-[35px]",
    "text-[45px]",
    "text-[50px]",
    "text-[70px]",
    "text-[75px]",
  ],

  theme: {
    extend: {
      colors: {
        primario: "var(--color-primario)",
        secundario: "var(--color-secundario)",
        terciario: "var(--color-terciario)",
        cuaternario: "var(--color-cuaternario)",
        cuaternario2: "var(--color-cuaternario2)",
      },
      fontFamily: {
        titulos: "var(--letra-titulos)",
        subtitulo1: "var(--letra-subtitulo1)",
        subtitulo2: ["var(--letra-subtitulo2)"],
        parrafos: ["var(--letra-parrafos)"],
        textos: ["var(--letra-textos)"],
        enlaces: "var(--letra-enlaces)",
        botones: ["var(--letra-botones)"],
        fascinate: ["var(--letra-decorativa)"],
        arteGestion: "var(--letra-arte-gestion)",
        tallerArtesanal: "var(--letra-taller-artesanal)",
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Ajusta según tu contenido
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 20s linear infinite', // Puedes cambiar duración
      },
    },
  },
  plugins: [],
};
