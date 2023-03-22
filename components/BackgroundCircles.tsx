import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['25%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center items-center xs:pt-12'>
        {/* <div className="xs: h-[40px] w-[40px]"> */}
      <div className='absolute border border-[#0C0404] rounded-full mt-52 animate-ping h-[200px] w-[200px]'/>
      <div className='absolute border border-[#0C0404] rounded-full h-[300px] w-[300px] mt-52'/>
      <div className='absolute border border-[#0C0404] rounded-full h-[500px] w-[500px] mt-52'/>
      <div className='absolute border border-[#A7BEAE] opacity-20 rounded-full xs:h-[450px] xs:w-[450px] h-[650px] w-[650px] xs:mt-200 mt-52 animate-pulse'/>
      <div className='absolute border border-[#0C0404] rounded-full xs:h-[600px] xs:w-[600px] h-[800px] w-[800px] mt-52'/>
        {/* </div> */}
    </motion.div>
  )
}