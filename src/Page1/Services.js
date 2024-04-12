import React, { useState, useEffect } from "react";
import Pg2 from "../Asset/AssetPorto/gambar Machine learning app.jpg";
import Pg1 from "../Asset/AssetPorto/gambar web app.png";

function ProductDescription({ imageSrc, altImage, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full md:w-full relative m-2 overflow-hidden transform transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto  relative">
        <img
          src={imageSrc}
          alt={altImage}
          className="w-full h-auto align-middle rounded-lg"
        />
        <p
          className={`absolute bottom-2 left-2 text-white transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {title}
        </p>
      </div>
      <div
        className={`text-sm sm:text-md lg:text-xl rounded-lg absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black bg-opacity-50 ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="text-white text-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const servicesSection = document.getElementById("Services");
      if (servicesSection) {
        const servicesSectionTop = servicesSection.offsetTop;
        if (scrollY >= servicesSectionTop - window.innerHeight / 2) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="justify-center" id="Services">
      <div className="flex flex-col mx-20 items-center relative h-auto">
        <div className="flex justify-center pt-5 pb-[25px]">
          <h1
            id="Our_Product"
            className="text-6xl text-slate-500 font-bold mr-2"
          >
            Our
          </h1>
          <h1 className="text-6xl font-bold">Product</h1>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-center w-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          } transition-all duration-700`}
        >
          <ProductDescription
            imageSrc={Pg1}
            altImage="Web App"
            title="Web App"
            description="Web-based software that is easily accessible on various devices using a browser, which requires absolutely no installation on a computer."
          />
          <ProductDescription
            imageSrc={Pg2}
            altImage="Machine Learning"
            title="Machine Learning"
            description="Artificial intelligence combined with neural network technology, which produces smart technology that can learn a set of data patterns."
          />
        </div>
      </div>
    </div>
  );
}
