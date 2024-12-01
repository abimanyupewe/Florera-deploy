/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './home/**/*.{home.html}', // ini untuk menghubungkan semua file HTML di dalam folder home
    // './src/**/*.html',  // jika ada file HTML di folder src
    'src/pages/home/tentang-produk.html',
    'index.html'
  ],
  theme: {
    extend: {
      // ini untuk menambahkan fitur yang sudah dimiliki tailwind
      colors: {
        green_gw: "#163020",
        gray_pudar_gw: "#F5F5F5",
        gray_gw: "#D0D4CA",                                                    
        yellow_gw: "#FFD700",
        // green_gw: "#294936",
        green_pastel: "#C6D79D",
      },

      // font
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      // ukuran web
      screens: {
        "2xl": "1320px", 
      },

      // animations
      animation: {
        // "scale-in-out": "scaleInOut 100s ease-in-out infinite",
        // "rotate-slow": "rotateSlow 100s linear infinite",
      },

      keyframes: {
        // scaleInOut: {
        //   "0%, 100%": { transform: "scale(1.1)" },
        //   "50%": { transform: "scale(1)" },
        // },
        // rotateSlow: {
        //   "0%": { transform: "rotate(0deg)" },
        //   "100%": { transform: "rotate(360deg)" },
        // },
      },
    },
  },
  plugins: [],
}

