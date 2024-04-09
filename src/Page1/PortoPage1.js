import React from "react";
import { Link } from "react-router-dom";
import imgPf from "../Asset/AssetPorto/aripPf1.png";
import Portolaundry from "../Asset/AssetPorto/LaundryApp.png";
import imgPf3 from "../Asset/AssetPorto/portoWeb1.jpg";
import Portofolio1 from "../Page2/Portofolio1";
import Portofolio2 from "../Page2/Portofolio2";

function PortoPage1() {
  return (
    <div>
      <div
        className="flex space-x-4 justify-center my-20 py-19 text-center"
        id="products"
      >
        <h1 className="font-bold text-blue-400 text-5xl lg:text-6xl ">
          Projects we are
          <span className="font-bold  text-black text-5xl lg:text-6xl">
            {" "}
            proud of
          </span>
        </h1>
      </div>

      <Portofolio1
        src={imgPf}
        alt="Image"
        judul="classification of monkey pox"
        desct="Application to differentiate between common smallpox and monkey pox, by utilizing classification of existing data on common small pox and monkey pox."
      />
      <Portofolio2
        src={Portolaundry}
        alt="Image"
        judul="Laundry Express"
        desct="Laundry Express, a web-based application, offers efficient and reliable laundry services ensuring high-quality service and customer satisfaction."
      />
      <Portofolio1
        src={imgPf3}
        alt="Image"
        judul="IRIS"
        desct="Iris is a useful application for making it easier to access health information. Simple application designed for convenience and flexibility."
      />
      <div className=" flex justify-center">
        <Link to="/Portofolio">
          <button className="rounded-md justify-center my-10  px-5 py-5 text-white font-bold text-xl bg-slate-400 hover:bg-slate-700 sm:text-xl">
            VIEW MORE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PortoPage1;
