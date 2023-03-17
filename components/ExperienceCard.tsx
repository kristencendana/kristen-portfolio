import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center 
    bg-[#292929] p-10 opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
      initial={{
        y: -100,
        opacity: 0
      }}
      transition={{duration: 1.2}}
      whileInView={{ 
        opacity: 1, 
        y: 0 }}
      viewport={{once: true}}
      className='bg-white pl-4 pt-1.5 w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="https://cdn.iconscout.com/icon/free/png-512/spacex-282142.png?f=avif&w=512" alt="" 
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>
          Software Engineer
        </h4>
        <p className='font-bold text-2xl mt-1'>
          Khartes
        </p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' 
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/rocket-6995987-5732144.png?f=avif&w=512"
          alt=""/>
           <img className='h-10 w-10 rounded-full' 
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/rocket-6995987-5732144.png?f=avif&w=512"
          alt=""/>
           <img className='h-10 w-10 rounded-full' 
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/rocket-6995987-5732144.png?f=avif&w=512"
          alt=""/>

        </div>
        <p className='uppercase py-5 text-gray-300'>Started.. End date</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Bullet Point</li>
          <li>Bullet Point</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard