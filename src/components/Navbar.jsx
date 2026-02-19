import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white fixed top-0 w-full z-500000 opacity-97 bg-gray-900 shadow-lg">
      
      {/* Navbar Top */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-lg">
          <a href="/">Ayush Verma</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["home", "about", "skill", "projects", "contact"].map((item) => (
            <li key={item} className="relative">
              <a
                href={`#${item}`}
                className="font-semibold hover:text-blue-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              <div
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              ></div>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col w-8 h-6 justify-between"
        >
          <span
            className={`h-1 w-full bg-white rounded transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-white rounded transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-white rounded transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 bg-gray-900">
          {["home", "about", "skill", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="font-semibold hover:text-blue-500"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
