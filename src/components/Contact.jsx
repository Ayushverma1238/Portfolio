import React from 'react'
import { useState } from 'react'
import { useEffect } from "react";
import AOS from "aos";
import { motion } from 'motion/react';
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
          AOS.init({
            duration: 800,
            once: true
          });
        }, []);
    const [Name, setName] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
  return (
    <>
        <section id='contact' className='dark:text-white text-gray-800 overflow-x-hidden bg-linear-to-br pb-20 min-h-screen from-cyan-100 to-sky-100 dark:from-gray-800 dark:to-slate-700'>
            <div data-aos = "zoom-in-up" className='flex transition-transform duration-300 flex-col px-10 gap-3 pt-20 pb-10 items-center'>
                <h1 className='text-3xl font-bold text-blue-700'>Get In Touch</h1>
                <h2 className='text-xl max-w-4xl text-center dark:text-gray-300 text-gray-900 font-semibold'>I'm open to collaborations, freelance opportunities, or just a friendly chat. Fill out the form or drop me an email!</h2>
            </div>
            <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease:"easeOut" }}
            viewport={{ once: true }}
            className='max-w-3xl  mx-10 md:mx-auto flex flex-col gap-5 py-10 rounded-2xl bg-white dark:bg-gray-900'>
                <div className='flex px-10 flex-col gap-3'>
                    <label className='font-bold text-lg' htmlFor="name">Name</label>
                    <input value={Name} name='name' onChange={(e)=>setName(e.target.value)} className='hover:ring px-5 py-3 rounded-lg dark:bg-gray-800 bg-gray-300' type="text" htmlFor="name" placeholder='Your Name' />
                </div>
                <div className='flex px-10 flex-col gap-3'>
                    <label className='font-bold text-lg' htmlFor="name">Email</label>
                    <input value={email} name='email' onChange={(e)=>setemail(e.target.value)} className='hover:ring px-5 py-3 rounded-lg dark:bg-gray-800 bg-gray-300' type="text" htmlFor="name" placeholder='you@gmail.com' />
                </div>
                <div className='flex px-10 flex-col gap-3'>
                    <label className='font-bold text-lg' htmlFor="name">Message</label>
                    <textarea value={message} name='message' onChange={(e)=> setmessage(e.target.value)} rows={6} className='hover:ring px-5 py-3 rounded-lg dark:bg-gray-800 bg-gray-300' type="text" htmlFor="name" placeholder='Your Message...' />
                </div>
                <div className='px-14'>

                <button className='w-full rounded-xl my-5 py-3 text-white bg-blue-500 font-bold'>Send Message</button>
                </div>
                <div className='font-bold text-center'>
                    <span>Or email me at: </span>
                    <span className='text-blue-600'>vermaayush9170@gmail.com</span>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Contact
