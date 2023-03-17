import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
      initial={{
        x:-500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x:0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon 
          url="https://www.linkedin.com/in/kristenabby/" 
          fgColor='#E7E8D1' 
          bgColor='transparent' 
        />
        <SocialIcon 
          url="https://github.com/kristencendana" 
          fgColor='#E7E8D1' 
          bgColor='transparent' 
        />
        {/* <SocialIcon 
          url="https://youtube.com/sonnysangha" 
          fgColor='gray' 
          bgColor='transparent' 
        /> */}
      </motion.div>
      {/* <Link href='#contact'>
        <motion.div 
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon 
              className='cursor-pointer'
              network='email' 
              fgColor='#E7E8D1'
              bgColor='transparent' 
            />
          <p className='uppercase hidden md:inline-flex text-sm text-[#E7E8D1]'>Get In Touch</p>
        </motion.div>
      </Link> */}
    </header>
  )
}