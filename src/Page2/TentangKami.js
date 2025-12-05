import { useEffect, useRef, useState } from "react";
import gambar from "../Asset/Bacground/kami.jpeg";

const TentangKami = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika terlihat di layar
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Animasi saat keluar
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 bg-white transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        {/* LEFT IMAGE */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-200
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <img
            src={gambar}
            alt="Tentang Kami"
            className="w-80 md:w-96 rounded-xl shadow-md bg-blue-50 p-2"
          />
        </div>

        {/* RIGHT TEXT */}
        <div
          className={`transition-all duration-1000 delay-300
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Kami adalah tim profesional yang berdedikasi dalam menciptakan
            solusi digital inovatif. Dengan pengalaman bertahun-tahun di
            industri teknologi, kami membantu bisnis bertransformasi melalui
            website dan aplikasi yang powerful, user-friendly, dan scalable.
          </p>

          {/* STATISTICS */}
          <div className="grid grid-cols-3 mt-10 text-center">
            <div
              className="transition-all duration-1000 delay-500 
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              "
            >
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-500 mt-1">Proyek Selesai</p>
            </div>

            <div
              className="transition-all duration-1000 delay-700 
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              "
            >
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-500 mt-1">Klien Puas</p>
            </div>

            <div
              className="transition-all duration-1000 delay-900 
                ${isVisible ? 'opacity-100' : 'opacity-0'}
              "
            >
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-gray-500 mt-1">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
