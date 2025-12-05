import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Portolaundry from "../Asset/AssetPorto/LaundryApp.png";
import imgPf from "../Asset/Porto/pelukibu.png";
import imgPf3 from "../Asset/Porto/sekolah.png";

import Portofolio1 from "../Page2/Portofolio1";
import Portofolio2 from "../Page2/Portofolio2";

function PortoPage1() {
  const [visibleItems, setVisibleItems] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          setVisibleItems((prev) => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  const animateLeft = (show) =>
    `transition-all duration-[1200ms] ease-out ${
      show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
    }`;

  const animateRight = (show) =>
    `transition-all duration-[1200ms] ease-out ${
      show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
    }`;

  return (
    <div id="portofolio" className="pt-10 pb-20 overflow-hidden">
      {/* Title */}
      <div
        className="
          flex justify-center my-10 px-5
          transition-all duration-[1400ms] ease-out
        "
      >
        <h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl opacity-100">
          <span className="text-blue-500">Proyek</span> yang Kami
          <span className="text-black"> Banggakan</span>
        </h1>
      </div>

      {/* List Project */}
      <div className="space-y-16">
        {/* Item 1 */}
        <div
          data-index="1"
          ref={(el) => (refs.current[0] = el)}
          className={animateLeft(visibleItems[1])}
        >
          <Portofolio1
            src={imgPf}
            alt="Image"
            judul="Peluk Ibu"
            desct="Aplikasi untuk mengetahui kondisi kesehatan mental ibu hamil secara mandiri "
          />
        </div>

        {/* Item 2 */}
        <div
          data-index="2"
          ref={(el) => (refs.current[1] = el)}
          className={animateRight(visibleItems[2])}
        >
          <Portofolio2
            src={Portolaundry}
            alt="Image"
            judul="Laundry Express"
            desct="Aplikasi laundry berbasis web untuk pemesanan layanan secara cepat, mudah, dan terpercaya."
          />
        </div>

        {/* Item 3 */}
        <div
          data-index="3"
          ref={(el) => (refs.current[2] = el)}
          className={animateLeft(visibleItems[3])}
        >
          <Portofolio1
            src={imgPf3}
            alt="Image"
            judul="Website Sekolah Terintegrasi"
            desct="Website sekolah all-in-one dengan fitur e-learning, manajemen administrasi, perpustakaan digital, dan integrasi AI untuk optimalkan proses belajar mengajar."
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Link to="/Porto">
          <button
            className="
              rounded-xl px-8 py-4 my-10
              text-white font-bold text-xl
              bg-gradient-to-r from-blue-500 to-slate-600
              shadow-xl hover:shadow-2xl
              hover:scale-105 transition-all duration-500
            "
          >
            Lihat Lebih Banyak
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PortoPage1;
