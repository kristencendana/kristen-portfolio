import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';
import Image from 'next/image';
import IconImage from '../public/next-icon.png'

type Props = {
  projects: Project[]
}

function Projects({projects}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
        
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='pageName'>
        Projects
      </h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 text-[#A7BEAE]
      xxs:scrollbar-thin xs:scrollbar-thin scrollbar scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80'>
        {projects?.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center 
          flex flex-col space-y-0 mt-10 items-center justify-center xxs:p-5 xs:p-7 short:p-10 p-10 h-screen'>
            <motion.img
              initial={{
                y: -200,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 1.2}}
              viewport={{once: true}}
                src={urlFor(project.image).url()}
                alt=""
                height={150}
                width={150}
              className="mt-9"
            />
            <div className='space-y-1 px-0 md:px-10'>
              <h4 className='xxs:text-base xs:text-base text-4xl font-semibold text-center'>
              </h4>
                <div className="flex justify-center">
                  {project?.technologies.map((technology) => (
                    <Image className="xxs:h-6 xxs:w-6 xs:h-8 xs:w-8 h-10 w-10"
                      key={technology._id} src={urlFor(technology.image).url()} alt="" 
                      height={1200} width={1200} 
                    />
                  ))}
                </div>
              <p className="xxs:text-[10px] xs:text-[12px]">
                {project.summary}
                {" "}
                For more information, please check out my <Link href={project.linkToBuild}><span className='decoration underline'>github</span></Link> or <Link href='#contact'><span className='decoration underline'>ask me!</span></Link>. 
              </p>

              <h4 className='xxs:text-base xs:text-base text-xl font-semibold text-center flex justify-center items-center'>
                <span className='underline decoration-[#E7E8D1]/50'>
                  Project: {i+1} of {projects.length}
                </span> {" "}
                <Image className='ml-2'
                  key="icon"
                  src={IconImage}
                  height={35}
                  width={35}
                  alt=""
                />
              </h4>
            </div>
          </div>
        ))}
      </div>
    <div className='w-full absolute top-[30%] bg-slate-400/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects