import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";

const Projects = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        once: true
      });
    }, []);
  return (
    <>
      <section id="projects" className="text-white overflow-x-hidden pb-10 min-h-screen dark:bg-linear-to-tr bg-linear-to-br dark:to-gray-900 dark:from-slate-700 from-white to-sky-100">
        <motion.div
          animate={{
            y:[100,0]
          }}
          transition = {{
            duration:1,
            ease:'easeOut'
          }}
        className="detail text-center mx-auto py-20 px-10 flex flex-col gap-3 max-w-150">
          <h1 className="text-4xl text-blue-600 font-bold">Projects</h1>
          <p className="text-lg text-gray-900 dark:text-gray-300">
            A curated list of projects showcasing real-world full-stack
            development skills.
          </p>
        </motion.div>

        <div className="projects grid grid-cols-1 md:grid-cols-2 px-10 lg:grid-cols-3 max-w-7xl gap-10 ">
          <div
          data-aos = 'zoom-in-up'
          className="project transition-transform duration-300 rounded-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)] shadow-lg  flex flex-col">

            <div className="image w-full">
              <img
                className="object-cover rounded-t-2xl"
                src="port.png"
                alt="portfolio"
              />
            </div>
            <div className="description dark:bg-gray-900 bg-white/10 dark:text-white text-black flex flex-col gap-3 justify-between flex-1 rounded-b-2xl  py-5 px-5">

              <div className="flex flex-col gap-2 px-10">
                <h2 className="text-2xl font-bold pt-3">PortFolio Website</h2>
                <p className="dark:text-gray-300 text-gray-800">
                  A modern and responsive developer portfolio built with React
                  and Tailwind CSS.
                </p>
              </div>
              <div className="flex gap-4 ">
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  React
                </span>
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  className="px-3 bg-blue-500 text-white w-full text-center font-semibold rounded-xl ring ring-white/90 py-2"
                  href="https://portfolio-4vox.vercel.app"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="px-3 bg-gray-900 text-white w-full text-center ring ring-white/90 font-semibold rounded-xl py-2"
                  href="https://github.com/Ayushverma1238/Portfolio.git"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
          data-aos = 'zoom-in-up'
          className="project transition-transform duration-300 rounded-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]  shadow-lg flex flex-col  ">
            <div className="image w-full">
              <img
                className="object-cover rounded-t-2xl"
                src="chai.png"
                alt="GetMeAChai"
              />
            </div>
            <div className="description rounded-b-2xl flex flex-col gap-6 dark:bg-gray-900 bg-white/10 dark:text-white text-black py-5 px-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold pt-3">Get Me A Chai</h2>
                <p className="dark:text-gray-300 text-gray-800">
                  A full-stack donation platform where users can support creators by buying them a virtual cup of chai.
                </p>
              </div>
              <div className="flex gap-4 ">
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Next JS
                </span>
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Tailwind
                </span>
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Mongo DB
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  className="text-white px-3 bg-blue-500 w-full text-center font-semibold rounded-xl ring ring-white/90 py-2"
                  href="https://get-me-a-chai-wivz.onrender.com/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="text-white px-3 bg-gray-900 gray-200 d w-full text-center ring ring-white/90 font-semibold rounded-xl py-2"
                  href="https://github.com/Ayushverma1238/Get-Me-A-Chai.git"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
          data-aos = 'zoom-in-up'
          className="project transition-transform duration-300 rounded-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]  shadow-lg flex flex-col  ">
            <div className="image w-full">
              <img
                className="object-cover rounded-t-2xl"
                src="linktree.png"
                alt="portfolio"
              />
            </div>
            <div className="description rounded-b-2xl flex flex-col gap-3 dark:bg-gray-900 bg-white/10 dark:text-white text-black py-5 px-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold pt-3">BitTree</h2>
                <p className="dark:text-gray-300 text-gray-800">
                  A responsive Linktree-style web application that lets users showcase and manage all their important links in one customizable profile page.
                </p>
              </div>
              <div className="flex gap-4 ">
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Next JS
                </span>
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Tailwind
                </span>
                <span className="px-3 text-white py-1 font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                  Mongo DB
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  className="text-white px-3 bg-blue-500 w-full text-center font-semibold rounded-xl ring ring-white/90 py-2"
                  href="https://bit-tree-ilts.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="text-white px-3 bg-gray-900 gray-200 d w-full text-center ring ring-white/90 font-semibold rounded-xl py-2"
                  href="https://github.com/Ayushverma1238/BitTree.git"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
          data-aos = 'zoom-in-up'
          className="project transition-transform duration-300 rounded-2xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]  shadow-lg flex flex-col  ">
            <div className="image w-full">
              <img
                className="object-cover rounded-t-2xl"
                src="chess.png"
                alt="portfolio"
              />
            </div>
            <div className="description rounded-b-2xl flex flex-col gap-3 dark:bg-gray-900 bg-white/10 dark:text-white text-black py-5 px-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold pt-3">LLD - Chess Game</h2>
                <p className="dark:text-gray-300 text-gray-900">
                  A low-level design implementation of a chess game demonstrating object-oriented principles, class relationships, and move validation logic. ♟️
                </p>
              </div>
              <div className="flex gap-4 ">
                <span className="px-3 py-1 text-white font-semibold-2 bg-linear-to-r rounded-full text-center from-blue-600 to-blue-800">
                    C++
                </span>
               
              </div>
              <div className="flex gap-3">
                <a
                  className="px-3 bg-blue-500 w-full text-white text-center font-semibold rounded-xl ring ring-white/90 py-2"
                  href="/"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className=" px-3 bg-gray-900 text-white w-full text-center ring ring-white/90 font-semibold rounded-xl py-2"
                  href="https://github.com/Ayushverma1238/LLD--Chess-Game.git"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Projects;
