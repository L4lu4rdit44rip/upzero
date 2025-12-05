import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer2 = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 ">
      <div className="container mx-auto px-5">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold tracking-wide">UPZero</h2>
            <p className="text-gray-400 mt-2 max-w-sm">
              Solusi digital modern untuk website, aplikasi, dan sistem yang
              inovatif.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Menu</h3>

            <ul className="space-y-1 text-gray-300">
              <li>
                <Link
                  to="cover"
                  smooth
                  duration={350}
                  className="cursor-pointer hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="Services"
                  smooth
                  duration={350}
                  className="cursor-pointer hover:text-white transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="portofolio"
                  smooth
                  duration={350}
                  className="cursor-pointer hover:text-white transition"
                >
                  Portofolio
                </Link>
              </li>

              <li>
                <Link
                  to="kontak"
                  smooth
                  duration={350}
                  className="cursor-pointer hover:text-white transition"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-2">Ikuti Kami</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a
                href="https://instagram.com/upzerooffice"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition cursor-pointer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/6285964150027"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition cursor-pointer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:upzero.office@gmail.com"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} UPZero — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
