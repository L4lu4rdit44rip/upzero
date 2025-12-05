import { useEffect, useState } from "react";
import P3 from "../Asset/AssetPorto/LaundryApp.png";
import P4 from "../Asset/Porto/pelukibu.png";
import P1 from "../Asset/Porto/sabika.png";
import P5 from "../Asset/Porto/sadiva.png";
import P0 from "../Asset/Porto/sekolah.png";
import P2 from "../Asset/Porto/sila.png";
import P6 from "../Asset/Porto/sumber.png";

export default function Porto() {
  const images = [
    {
      img: P0,
      title: "Website Sekolah: e-Learning dan Manajemen Sekolah",
      desc: "Merancang dan mengimplementasikan Website Sekolah Terintegrasi yang berfungsi sebagai sistem manajemen pendidikan digital all-in-one, menggabungkan fitur e-learning, manajemen administrasi sekolah, sistem perpustakaan digital, dan integrasi dasar Kecerdasan Buatan (AI) untuk mengoptimalkan proses belajar mengajar dan operasional sekolah..",
    },
    {
      img: P1,
      title: "Sanctuary Furnishing: E-Commerce Furniture  Berbasis Shopify",
      desc: "Mengembangkan Sanctuary Furnishing, sebuah platform e-commerce furnitur berbasis Shopify yang scalable, dengan kategorisasi dinamis, alur transaksi multi-step, dan fitur bookmark yang mengonversi kunjungan menjadi penjualan.",
    },
    {
      img: P2,
      title: "SILA (Sistem Literasi Anak)",
      desc: "Sebuah platform terpadu (web + aplikasi) untuk menganalisis tingkat kemampuan membaca siswa secara otomatis, membantu guru memberikan intervensi literasi yang tepat dan berbasis data.",
    },
    {
      img: P3,
      title: "Web Laundry",
      desc: "Sistem laundry lengkap dengan manajemen pesanan, notifikasi status, pembayaran digital, serta dashboard admin modern untuk mempermudah operasional bisnis laundry.",
    },
    {
      img: P4,
      title: "Peluk Ibu",
      desc: "Aplikasi kesehatan mental yang mendeteksi dan menganalisis tingkat stres wanita melalui screening emosional otomatis dan menyediakan intervensi personal sebagai pendamping digital proaktif.",
    },
    {
      img: P5,
      title: "SADIVA (Sadari & Pemeriksaan IVA)",
      desc: "Aplikasi kesehatan revolusioner yang memberdayakan wanita melakukan deteksi dini kanker payudara dan serviks melalui panduan interaktif, checklist terstruktur, serta edukasi lengkap.",
    },
    {
      img: P6,
      title: "Website Inspirasi Solusi",
      desc: "Platform sumber daya komprehensif bagi guru, kepala sekolah, dan pengawas, menyediakan materi literasi, numerasi, kurikulum, praktik pembelajaran, dan kepemimpinan.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(slide);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <style>{`
        .porto-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .slide-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: opacity 1s ease;
          animation: fadeIn 1s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(2px);
        }

        /* TEXT BOX */
        .text-box {
          position: absolute;
          left: 50px;
          bottom: 100px;
          max-width: 650px;
          padding: 20px 25px;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(8px);
          border-radius: 15px;
          color: white;
          animation: slideUp 0.9s ease;
        }

        .title {
          font-size: 46px;
          font-weight: bold;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .desc {
          font-size: 19px;
          line-height: 1.7;
          opacity: 0.95;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .thumb-box {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 14px;
        }

        .thumb {
          width: 75px;
          height: 55px;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.6;
          transition: 0.3s ease;
          border: 2px solid transparent;
        }

        .thumb:hover {
          opacity: 1;
          transform: scale(1.07);
        }

        .thumb.active {
          opacity: 1;
          transform: scale(1.15);
          border-color: white;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.6));
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* BACK BUTTON */
        .back-btn {
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 10px 18px;
        background: rgba(0,0,0,0.55);
        border-radius: 12px;
        color: white;
        font-size: 18px;
        cursor: pointer;
        z-index: 9999;        /* <<< memastikan tombol paling atas */
        border: 1px solid rgba(255,255,255,0.6);
        backdrop-filter: blur(4px);
        transition: 0.25s;
        }
        .back-btn:hover {
        background: rgba(0,0,0,0.85);
        transform: translateX(-4px);
        }


        /* NAV BUTTONS */
        .nav-btn {
          position: absolute;
          top: 50%;
          padding: 12px 17px;
          font-size: 32px;
          color: white;
          background: rgba(0,0,0,0.45);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transform: translateY(-50%);
          transition: 0.25s;
        }

        .nav-btn:hover {
          background: rgba(0,0,0,0.8);
        }

        .prev { left: 20px; }
        .next { right: 20px; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .title { font-size: 30px; }
          .desc { font-size: 15px; }
          .text-box {
            left: 20px; 
            right: 20px; 
            bottom: 120px;
            padding: 15px 18px;
          }
          .thumb { width: 60px; height: 45px; }
        }

        @media (max-width: 480px) {
          .title { font-size: 24px; }
          .desc { font-size: 14px; }
          .text-box { bottom: 140px; }
          .thumb { width: 50px; height: 38px; }
        }

      `}</style>

      <div className="porto-container">
        {/* BUTTON BACK */}
        <button className="back-btn" onClick={() => window.history.back()}>
          ❮ Back
        </button>

        <img src={images[index].img} className="slide-bg" />
        <div className="overlay"></div>

        <div className="text-box">
          <div className="title">{images[index].title}</div>
          <div className="desc">{images[index].desc}</div>
        </div>

        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-btn next" onClick={nextSlide}>
          ❯
        </button>

        <div className="thumb-box">
          {images.map((p, i) => (
            <div
              key={i}
              className={`thumb ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <img src={p.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
