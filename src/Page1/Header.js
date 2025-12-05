import { useState } from "react";
import { Link } from "react-scroll";
import Lg from "../Asset/Bacground/UpZero(2).png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between p-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Lg} alt="Logo" className="w-20 md:w-32 ml-4" />
          <h1 className="text-3xl md:text-5xl font-bold ml-4 mt-4">UPZERO</h1>
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="w-12 h-12 bg-slate-600 md:hidden flex items-center justify-center 
                     cursor-pointer rounded-full mr-6"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-medium mr-16">
          <Link
            to="cover"
            smooth
            duration={350}
            className="cursor-pointer hover:text-sky-600"
          >
            Home
          </Link>
          <Link
            to="Services"
            smooth
            duration={350}
            className="cursor-pointer hover:text-sky-600"
          >
            Services
          </Link>
          <Link
            to="portofolio"
            smooth
            duration={350}
            className="cursor-pointer hover:text-sky-600"
          >
            Products
          </Link>
          <Link
            to="kontak"
            smooth
            duration={350}
            className="cursor-pointer hover:text-sky-600"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-2xl z-50 
                    p-6 transform transition-transform duration-300 md:hidden
                    ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 bg-slate-700 p-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu List */}
        <div className="flex flex-col gap-6 mt-12 text-xl font-semibold text-gray-700">
          <Link
            to="cover"
            smooth
            duration={300}
            onClick={() => setOpen(false)}
            className="hover:text-sky-600"
          >
            Home
          </Link>
          <Link
            to="Services"
            smooth
            duration={300}
            onClick={() => setOpen(false)}
            className="hover:text-sky-600"
          >
            Services
          </Link>
          <Link
            to="products"
            smooth
            duration={300}
            onClick={() => setOpen(false)}
            className="hover:text-sky-600"
          >
            Products
          </Link>
          <Link
            to="kontak"
            smooth
            duration={300}
            onClick={() => setOpen(false)}
            className="hover:text-sky-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
