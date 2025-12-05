import TentangKami from "../Page2/TentangKami";
import Footer from "./Footer2";
import Header from "./Header";
import Index from "./Index";
import Kontak from "./Kontak";
import PortoPage1 from "./PortoPage1";
import Services from "./Services";

function Home() {
  return (
    <div className="pt-28">
      <Header />
      <Index />
      <TentangKami />
      <Services />
      <PortoPage1 />
      <Kontak />
      <Footer />
    </div>
  );
}

export default Home;
