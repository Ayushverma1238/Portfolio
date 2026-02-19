import React from "react";

import { useEffect } from "react";
import AOS from "aos";
import { motion } from "motion/react";
import "aos/dist/aos.css";


const Footer = () => {

  useEffect(() => {
        AOS.init({
          duration: 800,
          once: true
        });
      }, []);

  return (
    <>
      <div id="footer" className="dark:text-white tex-gray-900 bg-linear-to-br py-10 dark:from-slate-700 dark:to-gray-900 to-gray-800 from-cyan-100  flex gap-5 flex-col items-center">
        <div data-aos = 'zoom-in-down' className="flex transition-transform duration-300 gap-8">
          <a target="_blank" href="https://github.com/Ayushverma1238">
            <img className="h-8 w-8 " src="github-w.png" alt="" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/ayush-verma-0b90bb29a/">
            <img className="h-8 w-8" src="linkedin-w.png" alt="" />
          </a>
          <a href="mailto:vermaayush9170@gmail.com">
            <img className="h-8 w-8" src="letter-w.png" alt="" />
          </a>
        </div>

        <motion.div
        animate= {{
          x:[-150,0]
        }}
        transition = {{
          duration:5,
          ease:"backOut"
        }}
        className="transition-transform duration-300 font-semibold">
          <span>Based in India</span> ·{" "}
          <span className="text-blue-700">vermaayush9170@gmail.com</span>
        </motion.div>

        <div data-aos= "zoom-in-up" className=" transition-transform duration-300 font-semibold">
          &copy; 2026 <b>Ayush Verma</b>. All rights reserved.
        </div>

        <button data-aos = "zoom-in-down"
          className="mt-4 transition-transform duration-300 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl  transform hover:scale-110"
          aria-label="Back to Top"
        >
          <a href="/#home">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
          </a>
        </button>
      </div>
    </>
  );
};

export default Footer;
