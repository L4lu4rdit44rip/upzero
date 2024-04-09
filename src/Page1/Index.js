import React from "react";
import { Link } from "react-scroll";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Ba1 from "../Asset/Bacground/bg2.png";

function Index() {
  const [kata] = useTypewriter({ words: ["UpZero"], loop: {} });
  return (
    <div
      id="cover"
      class="flex flex-col md:flex-row justify-center items-center md:justify-between my-14 mx-4 md:mx-28 space-y-8 md:space-y-0 md:space-x-4"
    >
      <div class=" md:w-2/5 mt-8 md:mt-0 md:hidden ">
        <img class="animate-pulse mx-auto" src={Ba1} alt="Gambar" />
      </div>
      <div class="w-full md:w-3/5 mt-5 md:mt-0 md:ml-8">
        <h1 class="text-4xl md:text-6xl font-bold">Empower Your Business</h1>
        <h1 class="text-4xl md:text-6xl font-bold">
          with
          <span class="text-5xl md:text-7xl font-bold ml-4 text-slate-400">
            {" "}
            {kata}{" "}
          </span>
          <Cursor />
        </h1>
        <h1 class="text-lg md:text-xl font-bold mt-5">
          Let's turn your brilliant idea into more advanced technology together
        </h1>
        <Link>
          <button class="bg-slate-400 text-center mt-8 md:mt-20 px-7 py-2 font-bold rounded-md text-lg md:text-2xl">
            <Link
              to="contactUs"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact US
            </Link>
          </button>
        </Link>
      </div>

      <div class="w-full md:w-2/5 mt-8 md:mt-0 hidden md:block">
        <img class="animate-pulse mx-auto" src={Ba1} alt="Gambar" />
      </div>
    </div>
  );
}

export default Index;
