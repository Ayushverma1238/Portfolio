import React from "react";
// import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
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
    <>
      <div className="text-white z-10000 flex fixed top-0 w-screen shadow-[0_0_20px_rgba(0,0,0,0.9)]  justify-between items-center px-10 py-5 bg-gray-900 opacity-95">
        <h1 className="font-bold text-lg">
          <a href="/">Ayush Verma</a>
        </h1>
        <ul className="flex justify-between items-center gap-10">
          <li className="group relative inline-block cursor-pointer">
            <a
              className="font-semibold cursor-pointer hover:text-blue-500"
              href="#home"
            >
              Home
            </a>
            <div
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
${active === "home" ? "w-full" : "w-0 "}
`}
            ></div>
          </li>
          <li className="group relative inline-block cursor-pointer">
            <a
              className="font-semibold cursor-pointer hover:text-blue-500"
              href="#about"
            >
              About
            </a>
            <div
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
  ${active === "about" ? "w-full" : "w-0 "}
`}
            ></div>
          </li>
          <li className="group relative inline-block cursor-pointer">
            <a
              className="font-semibold cursor-pointer hover:text-blue-500"
              href="#skill"
            >
              Skills
            </a>
            <div
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
  ${active === "skill" ? "w-full" : "w-0 "}
`}
            ></div>
          </li>
          <li className="group relative inline-block cursor-pointer">
            <a
              className="font-semibold cursor-pointer hover:text-blue-500"
              href="#projects"
            >
              Projects
            </a>
            <div
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
      ${active === "projects" ? "w-full" : "w-0 "}
`}
            ></div>
          </li>
          <li className="group relative inline-block cursor-pointer">
            <a
              className="font-semibold cursor-pointer hover:text-blue-500"
              href="#contact"
            >
              Contact
            </a>
            <div
              className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all duration-300
      ${active === "contact" ? "w-full" : "w-0 "}
`}
            ></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
