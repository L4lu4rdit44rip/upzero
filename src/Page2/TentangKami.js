import { useEffect, useRef, useState } from "react";
import gambar from "../Asset/Bacground/kami.jpeg";

const TentangKami = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
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
          {/* LEFT IMAGE */}
          <div
            className={`flex justify-center items-center transition-all duration-1000 delay-200
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
  `}
          >
            <div className="w-full flex justify-center">
              <img
                src={gambar}
                alt="Tentang Kami"
                className="w-80 sm:w-96 md:w-[420px] lg:w-[480px] xl:w-[520px]
                 h-auto object-cover rounded-2xl shadow-lg bg-blue-50 p-2"
              />
            </div>
          </div>
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
          <h2 className="text-3xl font-bold mb-4">Tentang UPZERO</h2>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            UPZERO adalah perusahaan teknologi digital yang fokus pada pembuatan
            website dan aplikasi modern. Kami membantu bisnis meningkatkan
            efisiensi, produktivitas, dan daya saing melalui solusi yang cepat,
            aman, dan mudah digunakan.
            <br />
            <br />
            Didukung tim profesional berpengalaman, setiap produk yang kami
            bangun dirancang dengan standar kualitas tinggi, antarmuka yang
            ramah pengguna, serta kemampuan pengembangan yang berkelanjutan.
            <br />
            <br />
            Dalam lebih dari dua tahun perjalanan, UPZERO telah dipercaya
            mengerjakan berbagai proyek dari beragam sektor dan terus
            berkomitmen menghadirkan solusi digital yang inovatif dan berdampak.
          </p>

          {/* STATISTICS */}
          <div className="grid grid-cols-3 mt-10 text-center">
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-500 mt-1 text-sm md:text-base">
                Proyek Selesai
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-500 mt-1 text-sm md:text-base">
                Klien Puas
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-900 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-gray-500 mt-1 text-sm md:text-base">
                Tahun Pengalaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
