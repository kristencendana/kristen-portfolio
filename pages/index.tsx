import Head from 'next/head';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';

export default function Home() {
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
        <Experience />
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
