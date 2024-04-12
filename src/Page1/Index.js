import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Ba1 from "../Asset/Bacground/bg2.png";

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [kata] = useTypewriter({ words: ["UpZero"], loop: {} });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="cover"
      className="flex flex-col md:flex-row justify-center items-center md:justify-between my-14 mx-4 md:mx-28 space-y-8 md:space-y-0 md:space-x-4 "
    >
      <div className="md:w-2/5 mt-8 md:mt-0 md:hidden">
        <img className="animate-pulse mx-auto" src={Ba1} alt="Gambar" />
      </div>
      <div className=" w-full md:w-3/5 mt-5 md:mt-0 md:ml-8">
        <h1 className={`text-4xl md:text-6xl font-bold ${isVisible ? "translate-y-0" : "translate-y-12 opacity-0"
          } transition-all duration-700`}>Empower Your Business</h1>
        <h1 className={`text-4xl md:text-6xl font-bold ${isVisible ? "translate-y-0" : "translate-y-12 opacity-0"
          } transition-all duration-700 delay-150`}>
          with
          <span className="text-5xl md:text-7xl font-bold ml-4 text-slate-400">
            {" "}
            {kata}{" "}
          </span>
          <Cursor />
        </h1>
        <h1 className={`text-lg md:text-xl font-bold mt-5   ${isVisible ? "translate-y-0" : "translate-y-12 opacity-0"
          } transition-all duration-700 delay-200`}>
          Let's turn your brilliant idea into more advanced technology together
        </h1>
        <Link>
          <button className="bg-slate-400 text-center mt-8 md:mt-20 px-7 py-2 font-bold rounded-md text-lg md:text-2xl">
            <Link
              to="contactUs"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact Us
            </Link>
          </button>
        </Link>
      </div>

      <div className="w-full md:w-2/5 mt-8 md:mt-0 hidden md:block">
        <img className="animate-pulse mx-auto" src={Ba1} alt="Gambar" />
      </div>
    </div>
  );
}

export default Index;
