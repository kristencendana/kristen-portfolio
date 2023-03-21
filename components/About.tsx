import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {
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
      src={urlFor(pageInfo?.profilePic).url()}
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 
      rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-10 px-0 md:px-10 text-center'>
        <h4 className='text-4xl font-semibold'>
          A <span className='underline decoration-[#E7E8D1]/50'>little</span> bit about me {text}</h4>
          <p className='text-base text-[#E7E8D1]'>
            {pageInfo?.backgroundInformation} <Link href='#contact'><span className='decoration underline'>Contact Me!</span></Link>
            {/* <Link href='#contact'><span className='decoration underline'>Contact Me!</span></Link> */}
          </p>
      </div>
    </motion.div>
  )
}

export default About