import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings'

type Props = {
  skills: SkillType[]
}

export default function Skills({skills}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{duration: 1.5}}
      className='flex relative flex-col text-center md:text-left 
      xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='pageName'>
        Skills
      </h3>

      <div className='grid xxs:grid-cols-4 grid-cols-5 xxs:gap-4 gap-5'>
        {skills?.slice(0, skills.length / 2).map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}