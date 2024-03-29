import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props) {
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
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor='#E7E8D1' 
              bgColor='transparent' 
            />
          ))}
      </motion.div>

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
              url='#contact'
              network='email' 
              fgColor='#E7E8D1'
              bgColor='transparent' 
            />
          <Link href="#contact">
            <p className='uppercase hidden md:inline-flex text-sm text-[#E7E8D1]'>Get In Touch</p>
          </Link>
        </motion.div>
    </header>
  )
}