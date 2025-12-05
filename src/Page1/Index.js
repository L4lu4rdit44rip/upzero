import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Ba1 from "../Asset/Bacground/bg2.png";
function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [kata] = useTypewriter({ words: ["UpZero"], loop: {} });

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      id="cover"
      className="flex flex-col md:flex-row justify-center items-center md:justify-between
                 my-20 mx-6 md:mx-24 space-y-10 md:space-y-0 md:space-x-10"
    >
      {/* LEFT IMAGE (Mobile First) */}
      <div
        className={`md:w-2/5 md:hidden flex justify-center transition-all duration-700
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        <img
          className="animate-float w-72 drop-shadow-xl"
          src={Ba1}
          alt="Gambar"
        />
      </div>

      {/* TEXT SECTION */}
      <div className="w-full md:w-3/5 space-y-4">
        <h1
          className={`text-4xl md:text-5xl font-extrabold leading-tight transition-all duration-700 
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Wujudkan Visi Digital Anda
        </h1>

        <h1
          className={`text-3xl md:text-6xl font-extrabold transition-all duration-700 delay-150
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Bersama
          <span className="text-slate-400 text-4xl md:text-7xl font-extrabold ml-3">
            {kata}
          </span>
          <Cursor />
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-700 font-medium mt-4 transition-all duration-700 delay-300
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Solusi Pengembangan Web & Aplikasi Profesional untuk Bisnis Modern
        </p>

        {/* Button */}
        <div
          className={`transition-all duration-700 delay-500
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        >
          <Link to="kontak" smooth={true} duration={600}>
            <button
              className="bg-slate-400 text-white px-8 py-3 rounded-xl text-lg md:text-2xl 
                         font-bold shadow-md transition-all duration-300 hover:bg-slate-500 
                         hover:scale-105 active:scale-95"
            >
              Mulai Proyek Anda
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT IMAGE (Desktop Only) */}
      <div
        className={`hidden md:flex justify-center md:w-2/5 transition-all duration-700 delay-200
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        <img
          className="animate-float w-96 drop-shadow-xl"
          src={Ba1}
          alt="Gambar"
        />
      </div>
    </div>
  );
}

export default Index;
