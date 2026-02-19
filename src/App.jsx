import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { useState, useEffect } from "react";


function App() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [isDark]);


  const toggleTheme = () => {
  setIsDark(prev => !prev);
};


  return (
    <div
      
      className="relative h-full w-full 
bg-white text-black 
dark:bg-slate-950 dark:text-white
bg-linear-to-r
from-white/10 to-sky-200 
transition-colors duration-500"
    >
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]"></div> */}

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />

        <section id="home" className="pt-17  text-black dark:text-white min-h-screen">
          <div className=" lg:px-15 px-5 flex overflow-x-hidden flex-col-reverse md:flex-row py-10 md:py-0 gap-10 justify-between items-center from-white  bg-linear-to-r dark:from-slate-900 dark:to-gray-800 min-h-[95vh]">
            <div className="detail w-full lg:w-1/2 flex flex-col gap-4">
              <motion.div
                animate={{ x: [-150, 0] }}
                transition={{
                  duration: 1,
                }}
              >
                <h1 className="text-4xl font-bold">Software Engineer</h1>
                <h1 className="text-4xl font-bold text-cyan-600">
                  Building Scalable System
                </h1>
              </motion.div>
              <motion.p
                animate={{
                  y: [-40, 0],
                }}
                transition={{
                  duration: 1,
                }}
                className="dark:text-gray-400 text-gray-700 font-semibold break-all"
              >
                I’m Ayush Verma, a{" "}
                <b className="text-gray-900 dark:text-gray-200">Full Stack Developer</b>{" "}
                experienced in building{" "}
                <b className="text-gray-900 dark:text-gray-200">scalable web applications</b> using{" "}
                <b className="text-gray-900 dark:text-gray-200">Next.js</b> and{" "}
                <b className="text-gray-900 dark:text-gray-200">MongoDB</b>, designing{" "}
                <b className="text-gray-900 dark:text-gray-200">RESTful APIs</b>, and implementing
                secure <b className="text-gray-900 dark:text-gray-200">authentication systems</b>.
                I have strong problem-solving skills with a solid foundation in{" "}
                <b className="text-gray-900 dark:text-gray-200">Data Structures and Algorithms</b>,
                and a growing interest in{" "}
                <b className="text-gray-900 dark:text-gray-200">AI-driven systems</b>.
              </motion.p>
              <div className="button flex gap-10">
                <motion.button
                  animate={{
                    x: [20, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="px-5 py-3 rounded-full hover:-translate-y-0.5 hover:bg-blue-700 transition-all ease-in-out text-white duration-100 font-bold ring-1 dark:ring-white ring-black  bg-blue-600"
                >
                  <a href="/#contact">Contact Me</a>
                </motion.button>

                <motion.button
                  animate={{
                    x: [-20, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="px-5 py-3 rounded-full font-bold ring-1 dark:ring-white ring-black "
                >
                  <a href="/#projects">View Projects</a>
                </motion.button>
              </div>
              <motion.div
                animate={{
                  y: [-20, 0],
                }}
                transition={{
                  duration: 1,
                }}
                className="flex gap-3"
              >
                <a href="https://github.com/Ayushverma1238">
                  <img className="h-8 w-8" src="github.svg" alt="" />
                </a>
                <a href="https://www.linkedin.com/in/ayush-verma-0b90bb29a/">
                  <img className="h-8 w-8" src="linkedin-b.png" alt="" />
                </a>
                <a href="mailto:vermaayush9170@gmail.com">
                  <img className="h-8 w-8" src="mail.svg" alt="" />
                </a>
              </motion.div>

              <motion.div
                animate={{
                  y: [20, 0],
                }}
                transition={{
                  duration: 1,
                }}
                className="flex gap-6"
              >
                <div>
                  <h1 className="text-2xl font-bold text-blue-500">6+</h1>
                  <p className="font-semibold">Projects Delivered</p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-500">4+</h1>
                  <p className="font-semibold">Tech Domain</p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-500">1+</h1>
                  <p className="font-semibold">Year Experience</p>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Glow Behind Image */}
                <div
                  className="absolute -inset-6 
    bg-linear-to-tr from-blue-400 via-purple-400 to-pink-500 
    rounded-full blur-3xl animate-pulse opacity-40 -z-10"
                ></div>

                {/* Image */}
                <motion.img
                  src="mainImage.jpeg"
                  alt="AyushVerma"
                  initial={{ x: 150 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full object-cover object-top 
      rounded-full border-4 border-black 
      dark:border-gray-700 
      shadow-[0_0_40px_rgba(0,0,0,0.6)]
      dark:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <div className="h-0.5 bg-gray-600"></div> */}
        <About />
        <Skills />

        <Projects />

        <Contact />
        <div className="h-px bg-gray-500"></div>

        <Footer />

        <button
          onClick={toggleTheme}
          className="fixed bottom-5 right-5 z-50 p-4 rounded-full 
  bg-white dark:bg-gray-900 
  text-blue-600 dark:text-yellow-400 
  border border-gray-500 dark:border-yellow-300
  transition-all duration-300 animate-bounce"
        >
          {/* Glow */}
          <span
            className={`absolute inset-0 rounded-full blur-xl opacity-40 animate-ping z-[-1]
    ${isDark ? "bg-yellow-400" : "bg-blue-400"}`}
          ></span>

          <div className="relative w-6 h-6">
            {/* Moon Icon */}
            <svg
              className={`absolute w-6 h-6 transition-opacity duration-300 
      ${isDark ? "opacity-100" : "opacity-0"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>

            {/* Sun Icon */}
            <svg
              className={`absolute w-6 h-6 transition-opacity duration-300 
      ${isDark ? "opacity-0" : "opacity-100"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
