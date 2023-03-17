import React from 'react'
import { motion } from 'framer-motion'

type Props = {}
const projects = [1,2,3];

function Projects({}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
        
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#E7E8D1] text-2xl'>
        Projects
      </h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 text-[#A7BEAE]
      scrollbar-thin scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80'>
        {projects.map((project, i) => (
          <div key={project} className='w-screen flex-shrink-0 snap-center 
          flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            {/* UPDATE THIS AS WELL FOR NEXT JS IMAGES */}
            <motion.img
            initial={{
              y: -300,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{ duration: 1.2}}
            viewport={{once: true}}
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/rocket-6995987-5732144.png?f=avif&w=512"
              alt=""
            />
            <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#E7E8D1]/50'>
                  Case Study {i+1} of {projects.length}:
                </span> {" "}
                 UPS clone
              </h4>

              <p>
                Aliwawa is an eCommerce app that uses Log in Authentication with Google and
                Twitter. It has a beautiful Home Screen with posts of products to buy and sell
                just like any eCommerce website. There is also a checkout page.
              </p>
            </div>
          </div>
        ))}
        {/* Projects */}
        {/* Projects */}
      </div>
      
      <div className='w-full absolute top-[30%] bg-slate-400/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects