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

type Props = {
  pageInfo: PageInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  socials: Social[]
}

// static page rendering in Next Js (revalidate flag ever 10 seconds or so, keep sharing the cache)
const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className='bg-black text-[#A7BEAE] h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#B85042]/80 scrollbar-thumb-[#E7E8D1]/80' >
      <Head>
        <title>Kristen's Portfolio</title>
      </Head>
      <Header/>

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>
      

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section> 
      {/* Projects */}

      <section id='projects' className='snap-start'>
        <Projects />
      </section> 
      {/* Contact Me */}

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section> 

      <Link href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" 
          src="https://i.im.ge/2023/03/17/DiN3o9.Screen-Shot-2022-11-04-at-11-37-37-AM.png" alt=""/>
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