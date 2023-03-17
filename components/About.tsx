import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link';

type Props = {}

function About({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      ". . .", 
      // "kristen.env.NODE_ENV === Development"
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.5}}
      className='h-screen flex flex-col relative text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#E7E8D1] text-2xl'>
        About
      </h3>

      <motion.img 
      initial={{
        x:-200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      viewport={{once: true}}
      src="https://i.ibb.co/zHzsf8N/IMG-1-F5-AD208-C2-E6-1.jpg"
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 
      rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10 text-center'>
        <h4 className='text-4xl font-semibold'>
          A <span className='underline decoration-[#E7E8D1]/50'>little</span> bit about me {text}</h4>
          <p className='text-base text-[#E7E8D1]'>
            I’m Kristen Abby (She/her). As a Filipino American, I am blesed with two names so you can call me either Kristen or Abby. 
            I graduated at California State University, Long Beach with a double degree in Applied Mathematics 
            and Mathematical Economics. After graduating, I worked at an amazing company called SpaceX, where I was
            exposed to the world of technology, 
            querying their relational database using MySql for the purchasing team. 
            Most recently, I’ve had the opportunity to work under an open source tech accelerator called OS Labs, 
            launching my product, Khartes – an open source cross-platform desktop application to help developers manage their kubernetes clusters.
            I’m passionate about learning, developing, and producing wonderful content and if you’d like to learn more about me, feel free to Contact me
            {/* <Link href='#contact'><span className='decoration underline'>Contact Me!</span></Link> */}
          </p>
      </div>
    </motion.div>
  )
}

export default About