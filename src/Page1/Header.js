import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import Lg from "../Asset/Bacground/UpZero(2).png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const navRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    setInitialLoad(false);

    function handleClickOutside(event) {
      if (
        isNavOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    navRef.current.classList.remove("nav-close");
  };

  const closeNav = () => {
    setIsNavOpen(false);
    navRef.current.classList.add("nav-close");
  };

  return (
    <div className="relative flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-24 md:w-36">
          <img
            className="size-24 md:size-36 ml-4 md:ml-20"
            src={Lg}
            alt="Logo"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mt-6 md:mt-14 ml-4 md:ml-10">
          UPZERO
        </h1>
      </div>
      {/* Ikon */}
      <div
        ref={iconRef}
        className="w-12 h-12 bg-slate-600 mr-[20px] flex items-center justify-center hover:animate-pulse cursor-pointer rounded-full"
        onClick={toggleNav}
      >
        {!isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8 text-white"
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
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8 text-white"
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
        )}
      </div>
      {/* Navigasi */}
      <div
        className={`absolute top-[48px] right-[70px] bg-slate-50 font-medium border-solid border-2 border-sky-500 p-[13px] rounded-l-lg shadow-lg z-10 text-right ${
          isNavOpen && !initialLoad
            ? "opacity-100 nav-open"
            : "opacity-0 pointer-events-none nav-close"
        }`}
        ref={navRef}
        onClick={closeNav}
      >
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          <Link
            to="cover"
            smooth={true}
            duration={350}
            className="cursor-pointer"
          >
            Home
          </Link>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          <Link
            to="Services"
            smooth={true}
            duration={350}
            className="cursor-pointer"
          >
            Services
          </Link>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          <Link
            to="products"
            smooth={true}
            duration={400}
            className="cursor-pointer"
          >
            Products
          </Link>
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 mr-4">
          <Link
            to="contactUs"
            smooth={true}
            duration={450}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </a>
      </div>
    </div>
  );
}

export default Header;
