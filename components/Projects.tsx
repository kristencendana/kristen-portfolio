import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

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
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#E7E8D1] text-2xl'>
        Projects
      </h3>
      
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 text-[#A7BEAE]
      scrollbar scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80'>
        {projects?.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center 
          flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            {/* UPDATE THIS AS WELL FOR NEXT JS IMAGES */}
            <motion.img
            initial={{
              y: -300,
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
            />
            <div className='space-y-10 px-0 md:px-10'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#E7E8D1]/50'>
                  Projects {i+1} of {projects.length}:
                </span> {" "}
                 {project.title}
              </h4>
              <div className="flex justify-center">
                {project?.technologies.map((technology) => (
                  <img className="h-10 w-10"
                  key={technology._id} src={urlFor(technology.image).url()} alt="" />
                  ))}

              </div>
              <p>
                {project.summary}
                {" "}
                For more information, please check out my <Link href={project.linkToBuild}><span className='decoration underline'>github</span></Link> or <Link href='#contact'><span className='decoration underline'>ask me!</span></Link>. 
              </p>
            </div>
          </div>
        ))}
        {/* Projects */}
        {/* Projects */}
      </div>
      
      <div className='w-full absolute top-[30%] bg-slate-400/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects