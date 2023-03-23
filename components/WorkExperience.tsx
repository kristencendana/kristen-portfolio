import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full xxs:px-2 xs:px-5 px-10 justify-evenly mx-auto items-center'>
      {/* className='h-screen flex flex-col relative text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'> */}
      <h3 className='pageName'>
        Experience
      </h3>

      <div className='w-full mt-24 flex space-x-4 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar-thin scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80'>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience;