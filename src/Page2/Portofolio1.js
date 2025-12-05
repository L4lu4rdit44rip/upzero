import { useEffect, useState } from "react";

function Portofolio1({ src, alt, judul, desct }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <div
      className={`mx-5 xl:mx-auto max-w-screen-lg transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className="flex flex-col md:flex-row px-4 md:px-0 py-10 
        bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl 
        transition-all duration-500 hover:scale-[1.02]"
      >
        {/* Text */}
        <div className="w-full md:w-3/5 p-5">
          <h1 className="font-bold text-2xl md:text-3xl mt-4">{judul}</h1>
          <p className="text-lg md:text-xl mt-5 opacity-80 leading-relaxed">
            {desct}
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <img
            className="w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}

export default Portofolio1;
