import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';
import Image from 'next/image';

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center xxs:space-y-0 xs:space-y-0 space-y-7
    flex-shrink-0 xxs:h-[400px] xxs:w-[250px] xs:h-[450px] xs:w-[300px] short:h-[300px] w-[500px] h-[600px] md:w-[600px] xl:w-[600px] snap-center
    bg-[#0C090A] xxs:p-2 xs:p-2 p-10 opacity-75 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll
    scrollbar-thin scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80 overflow-hidden'>
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
        className= 'bg-white w-24 h-24 rounded-full object-center '
        src={urlFor(experience?.companyImage).url()} alt="companyImage" 
      />

      <div className='px-0 md:px-10'>
        <h4 className='xxs:text-base xs:text-base text-xl font-light text-[#A7BEAE]'>
          {experience?.jobTitle}
        </h4>
        <p className='font-bold short:text-base xxs:text-base xs:text-base text-xl mt-1 text-[#E7E8D1]'>
          {experience?.company}
        </p>
        <div className='flex flex-wrap justify-center space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <Image className='xxs:h-8 xxs:w-8 xs:h-8 xs:w-8 h-10 w-10 rounded-full' 
              key="technologyImage"
              src={urlFor(technology.image).url()}
              alt="technologyImage"
              height={1200}
              width={1200}
            />
          ))}

        </div>
        <p className='uppercase xxs:text-[12px] short:text-[14px] xxs:py-0 xs:text-[12px] xs:py-0 py-5 text-[#B85042]'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
        <ul className='list-disc space-y-4 ml-5 xxs:text-[10px] xs:text-[10px] text-[12px] h-80 text-[#E7E8D1]'>
          {experience.points.map((point,i) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard