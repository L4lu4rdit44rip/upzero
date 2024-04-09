import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Index from "./Index";
import PortoPage1 from "./PortoPage1";
import Services from "./Services";

function Home() {
  return (
    <div>
      <Header />
      <Index />
      <Services />
      <PortoPage1 />
      <Footer/>
    </div>
  );
}

export default Home;
