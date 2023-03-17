import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      {/* className='h-screen flex flex-col relative text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'> */}
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#E7E8D1] text-2xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experience