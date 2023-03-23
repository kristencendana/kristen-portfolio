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
      md:text-left md:flex-row max-w-7xl xxs:px-5 px-10 justify-evenly mx-auto items-center'>
      <h3 className='pageName'>
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
        className='-mb-20 mt-[3rem] md:mb-0 flex-shrink-0 xxs:w-40 xxs:h-40 xs:w-40 xs:h-40 short:w-40 short:h-40 w-56 h-56 
        xxs:rounded-full xs:rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] xxs:pb-0 xs:pb-0 md:pt-5 xl:pt-5'
      />
      <div className='px-0 md:px-10 text-center'>
        <h4 className='xxs:mt-8 xs:mt-8 xs:mb-0 xxs:text-xl xs:text-xl short:text-2xl mt-10 text-2xl font-semibold'>
          A <span className='underline decoration-[#E7E8D1]/50'>little</span> bit about me {text}</h4>
          <p className='xxs:text-[8px] xs:text-[10px] text-base text-[#E7E8D1]'>
            {pageInfo?.backgroundInformation} <Link href='#contact'><span className='decoration underline'>Contact Me!</span></Link>
          </p>
      </div>
    </motion.div>
  )
}

export default About