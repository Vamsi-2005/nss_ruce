import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import leftLogo from "../../assets/images/logo.png";
import rightLogo from "../../assets/images/logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "EVENTS", path: "/events" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOOD FINDER", path: "/blood" },
    { name: "CONTACT", path: "/contact" },
    { name: "REGISTER", path: "/register" },
    { name: "ADMIN LOGIN", path: "/admin" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/80 shadow" : "bg-white"
      }`}
    >
      {/* TOP SECTION */}
      <div className="flex items-center justify-center gap-6 py-3 border-b">

        {/* LEFT LOGO */}
        <img src={leftLogo} alt="logo" className="w-12" />

        {/* CENTER TEXT */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-green-700">
            ABC COLLEGE OF ENGINEERING
          </h1>
          <p className="text-sm text-gray-600">
            ఏబీసీ ఇంజినీరింగ్ కళాశాల
          </p>
        </div>

        {/* RIGHT LOGO */}
        <img src={rightLogo} alt="logo" className="w-12" />
      </div>

      {/* NAVBAR */}
      <nav className="hidden md:flex justify-center gap-10 py-3 bg-green-50">
        {navLinks.map((link, i) => {
          const isActive =
            link.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.path);

          return (
            <Link
              key={i}
              to={link.path}
              className={`relative group font-semibold px-2 py-1 transition duration-300 ${
                isActive
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {link.name}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-full bg-green-600 shadow-[0_0_8px_#16a34a]"
                    : "w-0 bg-green-600 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;