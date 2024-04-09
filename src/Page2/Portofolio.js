import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import imgPf from "../Asset/AssetPorto/aripPf1.png";
import imgPf2 from "../Asset/AssetPorto/aripPf2.png";
import imgPf3 from "../Asset/AssetPorto/portoWeb1.jpg";
import Portolaundry from "../Asset/AssetPorto/LaundryApp.png";
import PortoHelpMom from "../Asset/AssetPorto/HelpMomApp.png";
import bg from "../Asset/Bacground/bg1.jpg";
import IconButton from "../IconButton/IconButton";
import Portofolio1 from "./Portofolio1";
import Portofolio2 from "./Portofolio2";
function Portofolio() {
  return (
    <div
      className="bg-fixed bg-cover bg-center mx-auto "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="pt-10 pl-5 sm:pl-20">
        <Link to={"/"}>
          <IconButton text="Back">
            <IoArrowBackCircleSharp size={40} />
          </IconButton>
        </Link>
      </div>

      <div className="flex justify-center pt-5 pb-16">
        <h1 className="text-5xl text-slate-500 font-bold pr-5">Our</h1>
        <h1 className="text-5xl font-bold">Project</h1>
      </div>
      <div>
        <Portofolio1
          src={imgPf}
          alt="Image"
          judul="classification of monkey pox"
          desct="Application to differentiate between common smallpox and monkey pox, by utilizing classification of existing data on common small pox and monkey pox."
        />
        <Portofolio2
          src={imgPf2}
          alt="Image"
          judul="Mini Game"
          desct="Simple games that are easy to play anytime and anywhere, games to train reflexes and train focus."
        />
        <Portofolio1
          src={imgPf3}
          alt="Image"
          judul="IRIS"
          desct="Iris is a useful application for making it easier to access health information. Simple application designed for convenience and flexibility."
        />
        <Portofolio2
          src={Portolaundry}
          alt="Image"
          judul="Laundry Express"
          desct="Laundry Express, a web-based application, offers efficient and reliable laundry services ensuring high-quality service and customer satisfaction."
        />
        <Portofolio1
          src={PortoHelpMom}
          alt="Image"
          judul="Help Mom App"
          desct="Help Mom App is a simple web application that utilizes image classification technology to identify Padang cuisine, assisting users in discovering and learning about traditional dishes from the Padang region."
        />
      </div>
      <div className="pt-10 pb-10 pl-20">
        <Link to={"/"}>
          <IconButton text="Back">
            <IoArrowBackCircleSharp size={40} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default Portofolio;
