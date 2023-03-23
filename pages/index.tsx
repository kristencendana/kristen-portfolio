import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';
import Image from 'next/image';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

// static page rendering in Next Js (revalidate flag ever 10 seconds or so, keep sharing the cache)
export default function Home ({pageInfo, experiences, skills, projects, socials}: Props) {
  return (
    <div className='bg-black text-[#A7BEAE] h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80' >
      <Head>
        <title>Kristen&#39;s Portfolio</title>
      </Head>
      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      
      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section> 

      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section> 


      <section id='contact' className='snap-start'>
        <ContactMe />
      </section> 

      <Link href="#hero">
      <footer className='sticky xxs:bottom-1 xs:bottom-1 bottom-5 w-full cursor-pointer'>
        <div className='flex items-end flex-col pr-6'>
          <Image className="xxs:mr-1.5 xxs:h-6 xxs:w-6 xs:h-6 xs:w-6 short:h-8 short:w-8 h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
            src={urlFor(pageInfo.heroImage).url()} alt="" height={1200} width={1200}/>
            <p className="text-[10px] xs:mr-0 mr-1">Home</p>
        </div>
        </footer>
      </Link>
    </div>
  )
}

// if you want to do it per server request, do getServerSideRendering
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // On deployment, we build ui ready and cache it so we don't have to rebuild every time we get a request
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}