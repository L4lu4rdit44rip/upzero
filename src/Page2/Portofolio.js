import { useEffect, useRef } from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import imgPf from "../Asset/AssetPorto/aripPf1.png";
import imgPf2 from "../Asset/AssetPorto/aripPf2.png";
import PortoHelpMom from "../Asset/AssetPorto/HelpMomApp.png";
import Portolaundry from "../Asset/AssetPorto/LaundryApp.png";
import imgPf3 from "../Asset/AssetPorto/portoWeb1.jpg";
import bg from "../Asset/Bacground/bg1.jpg";

import IconButton from "../IconButton/IconButton";
import Portofolio1 from "./Portofolio1";
import Portofolio2 from "./Portofolio2";

function Portofolio() {
  // REF untuk animasi scroll
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;

          if (entry.isIntersecting) {
            target.classList.add("enter");
            target.classList.remove("exit");
          } else {
            target.classList.remove("enter");
            target.classList.add("exit");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));

    return () => {
      sectionsRef.current.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div
      className="bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Back Top */}
      <div
        ref={addToRefs}
        className="pt-10 pl-5 sm:pl-20 opacity-0 -translate-x-10 transition-all duration-[1200ms]"
      >
        <Link to="/">
          <IconButton text="Kembali">
            <IoArrowBackCircleSharp size={40} />
          </IconButton>
        </Link>
      </div>

      {/* Title */}
      <div
        ref={addToRefs}
        className="
          flex justify-center pt-5 pb-16
          opacity-0 translate-y-10
          transition-all duration-[1400ms]
        "
      >
        <h1 className="text-5xl text-slate-500 font-bold pr-5">Proyek</h1>
        <h1 className="text-5xl font-bold">Kami</h1>
      </div>

      {/* Portfolio Items */}
      <div>
        {/* 1 */}
        <div
          ref={addToRefs}
          className="opacity-0 -translate-x-20 transition-all duration-[1200ms]"
        >
          <Portofolio1
            src={imgPf}
            alt="Image"
            judul="Klasifikasi Monkeypox"
            desct="Aplikasi pendeteksi jenis cacar (cacar monyet vs cacar biasa) menggunakan teknologi klasifikasi citra."
          />
        </div>

        {/* 2 */}
        <div
          ref={addToRefs}
          className="opacity-0 translate-x-20 transition-all duration-[1200ms]"
        >
          <Portofolio2
            src={imgPf2}
            alt="Image"
            judul="Mini Game"
            desct="Permainan sederhana yang dibuat untuk melatih fokus, refleks, dan hiburan ringan kapan saja."
          />
        </div>

        {/* 3 */}
        <div
          ref={addToRefs}
          className="opacity-0 -translate-x-20 transition-all duration-[1200ms]"
        >
          <Portofolio1
            src={imgPf3}
            alt="Image"
            judul="IRIS - Informasi Kesehatan"
            desct="Aplikasi sederhana yang menyediakan akses cepat ke informasi kesehatan secara ringkas dan mudah digunakan."
          />
        </div>

        {/* 4 */}
        <div
          ref={addToRefs}
          className="opacity-0 translate-x-20 transition-all duration-[1200ms]"
        >
          <Portofolio2
            src={Portolaundry}
            alt="Image"
            judul="Laundry Express"
            desct="Aplikasi layanan laundry berbasis web yang membantu pelanggan memesan layanan dengan cepat, mudah, dan efisien."
          />
        </div>

        {/* 5 */}
        <div
          ref={addToRefs}
          className="opacity-0 -translate-x-20 transition-all duration-[1200ms]"
        >
          <Portofolio1
            src={PortoHelpMom}
            alt="Image"
            judul="Help Mom App"
            desct="Aplikasi klasifikasi makanan khas Padang menggunakan teknologi pengenalan gambar untuk mengenali jenis masakan."
          />
        </div>
      </div>

      {/* Bottom Back Button */}
      <div
        ref={addToRefs}
        className="pt-10 pb-20 pl-20 opacity-0 translate-x-10 transition-all duration-[1200ms]"
      >
        <Link to="/">
          <IconButton text="Kembali">
            <IoArrowBackCircleSharp size={40} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Portofolio;
