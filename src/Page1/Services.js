import { useEffect, useRef, useState } from "react";
import Pg1 from "../Asset/AssetPorto/gambar web app.png";
import Pg2 from "../Asset/Bacground/apk.png";
import Pg3 from "../Asset/Bacground/setting2.png";

function ProductDescription({
  imageSrc,
  altImage,
  title,
  description,
  animateClass,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full max-w-sm mx-auto rounded-2xl overflow-hidden
      bg-white/40 backdrop-blur-xl shadow-xl transform transition-all duration-500
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/50
      ${isHovered ? "scale-[1.03]" : "scale-100"}
      group 
      ${animateClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt={altImage}
          className="w-full h-52 sm:h-56 md:h-64 object-cover rounded-2xl transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* TITLE ON IMAGE */}
      <p
        className={`absolute bottom-3 left-5 text-white text-lg font-semibold drop-shadow-md transition-all duration-300 
        ${isHovered ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
      >
        {title}
      </p>

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6
        bg-black/60 backdrop-blur-md transition-all duration-500
        ${isHovered ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white text-sm sm:text-base">{description}</p>

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-all"></div>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const [scrollDir, setScrollDir] = useState("down");
  const [gridAnim, setGridAnim] = useState("opacity-0");

  // Detect scroll direction
  useEffect(() => {
    let lastY = window.scrollY;

    const detectDirection = () => {
      setScrollDir(window.scrollY > lastY ? "down" : "up");
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", detectDirection);
    return () => window.removeEventListener("scroll", detectDirection);
  }, []);

  // Intersection Observer untuk animasi masuk/keluar
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Masuk view
            if (scrollDir === "down") {
              setGridAnim("animate-slide-up opacity-100");
            } else {
              setGridAnim("animate-slide-down opacity-100");
            }
          } else {
            // Keluar view
            setGridAnim("opacity-0");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [scrollDir]);

  return (
    <>
      {/* Custom Animation */}
      <style>
        {`
        .animate-slide-up {
          transform: translateY(40px);
          animation: slideUp 0.8s ease forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-slide-down {
          transform: translateY(-40px);
          animation: slideDown 0.8s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>

      <div
        id="Services"
        ref={sectionRef}
        className="w-full py-14 bg-gradient-to-b from-white via-slate-50 to-white"
      >
        <div className="flex flex-col items-center px-5 sm:px-10 lg:px-24">
          {/* TITLE */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${gridAnim}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide text-slate-800">
              Layanan <span className="text-sky-600">Kami</span>
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Solusi lengkap untuk kebutuhan digital bisnis Anda.
            </p>
          </div>

          {/* GRID */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl ${gridAnim}`}
          >
            <ProductDescription
              imageSrc={Pg1}
              altImage="Web App"
              title="Website & Machine Learning"
              description="Website modern & responsive, lengkap dengan integrasi Machine Learning untuk otomasi cerdas."
              animateClass={gridAnim}
            />

            <ProductDescription
              imageSrc={Pg2}
              altImage="Aplikasi Mobile"
              title="Pengembangan Aplikasi Mobile"
              description="Aplikasi Android & iOS yang cepat, smooth, dan dirancang untuk pengalaman terbaik."
              animateClass={gridAnim}
            />

            <ProductDescription
              imageSrc={Pg3}
              altImage="Maintenance"
              title="Konsultasi & Maintenance"
              description="Pendampingan teknologi, perbaikan sistem, dan maintenance berkelanjutan."
              animateClass={gridAnim}
            />
          </div>
        </div>
      </div>
    </>
  );
}
