import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  skill: Skill
  directionLeft?: boolean
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -25:25,
          opacity: 0
        }}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1}}
        src={urlFor(skill.image).url()}
        alt=""
        className='rounded-full border border-gray-500 object-cover xxs:w-12 xxs:h-12 xs:w-12 xs:h-12 short:w-16 short:h-16 w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
       group-hover:bg-white xxs:w-12 xxs:h-12 xs:w-12 xs:h-12 short:w-16 short:h-16 h-24 w-24 rounded-full z-0 border-black'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-[8px] font-bold text-black opacity-100'>
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill