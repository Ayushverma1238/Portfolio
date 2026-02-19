import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <>
      <section
        id="about"
        className=" dark:text-white text-gray-950 overflow-x-hidden flex flex-col py-20 bg-linear-to-r gap-10 dark:to-slate-700 dark:from-gray-950 from-cyan-200 to-sky-100 min-h-screen"
      >
        <div className="gap-4 flex justify-center">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-cyan-500">About</h1>
          <h1 className="text-4xl font-bold"> Me</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-5 justify-center items-center mb-12 md:mb-0 aos-init aos-animate"
            data-aos="fade-left"
          >
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-105 md:h-105">
              <img
                src="mainImage.jpeg "
                alt="AyushVerma"
                className="w-full object-top h-full object-cover rounded-full border-4 border-blue dark:border-blue-700 shadow-[0_0_40px_rgba(255,255,255,0.6)]"
              />
              <div className="absolute -inset-3 rounded-full bg-linear-to-tr from-blue-400 via-purple-400 to-pink-500 blur-xl opacity-30 animate-pulse -z-10"></div>
            </div>
            <div className="flex gap-3 font-bold text-gray-900 dark:text-blue-400">
              <span>Software Engineer</span>
              <div className="w-1 dark:bg-blue-400 bg-gray-900 rounded-full"></div>
              <span>Full Stack Developer</span>
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          className="detail w-full lg:w-1/2 flex flex-col gap-4">
            <p className="dark:text-gray-400 text-slate-800 px-10 font-semibold">
              I’m <b className="dark:text-gray-300 text-slate-900">Ayush Verma</b>, a{" "}
              <b className="dark:text-gray-300 text-slate-900">Software Developer</b> focused on
              building <b className="dark:text-gray-300 text-slate-900">scalable</b>
              and <b className="dark:text-gray-300 text-slate-900">secure web applications</b> using
              modern full-stack technologies. I work with{" "}
              <b className="dark:text-gray-300 text-slate-900">Next.js</b> and{" "}
              <b className="dark:text-gray-300 text-slate-900">MongoDB</b> to design robust backend
              systems, develop <b className="dark:text-gray-300 text-slate-900">RESTful APIs</b>,
              implement{" "}
              <b className="dark:text-gray-300 text-slate-900">authentication & authorization</b>,
              and ensure efficient data management. On the frontend, I create
              responsive and user-friendly interfaces using{" "}
              <b className="dark:text-gray-300 text-slate-900">React</b>,{" "}
              <b className="dark:text-gray-300 text-slate-900">Tailwind CSS</b>. I have strong
              problem-solving skills with a solid foundation in{" "}
              <b className="dark:text-gray-300 text-slate-900">Data Structures and Algorithms</b>,
              and a growing interest in building AI-driven systems.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            className="button flex flex-wrap gap-x-10 gap-y-4 px-10">
              <button className="px-4 py-1 rounded-full font-bold ring-1 dark:ring-white ring-black text-white bg-blue-700">
                <a href="/">C++</a>
              </button>
              <button className="px-4 py-1 rounded-full font-bold ring-1 dark:ring-white ring-black text-white bg-blue-700">
                <a href="/">React</a>
              </button>
              <button className="px-4 py-1 rounded-full font-bold ring-1 dark:ring-white ring-black text-white bg-blue-700">
                <a href="/">Rest APIs</a>
              </button>
              <button className="px-4 py-1 rounded-full font-bold ring-1 dark:ring-white ring-black text-white bg-blue-700">
                <a href="/">Tailwind CSS</a>
              </button>
              <button className="px-4 py-1 rounded-full font-bold ring-1 dark:ring-white ring-black text-white bg-blue-700">
                <a href="/">Mongo DB</a>
              </button>
              <button className="px-4 py-1 rounded-full font-bold ring-1 dark:ring-white ring-black text-white bg-blue-700">
                <a href="/">Next JS</a>
              </button>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="px-10">
              <button className="px-5 py-3 rounded-full text-gray-900 dark:text-white font-bold bg-blue-500 ring-1">
                <a href="/#contact">Let's Connect</a>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
