import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import Image from 'next/image';

type Props = {
  pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi there! My name is ${pageInfo?.name}.`, 
      "Loves-to-make-a-positive-impact.tsx", 
      "<InquisitiveProblemSolver />", 
      "CatLover.config.js", 
      "But-allergic-to-cats.gitignore", 
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BackgroundCircles />
      <Image 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()} alt=""
        height={1200} width={1200}
      />
      <div className='z-20'>
        <h2 className='xs:text-[10px] text-sm uppercase text-[#E7E8D1] pb-2 xs:tracking-[5px] tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='xs:text-[20px] text-5xl lg:text-6xl font-semibold px-10'>
          <span className='xs:mr-1 mr-3'>{text}</span>
          <Cursor cursorColor='#E7E8D1'/>
        </h1>
        <div className='xs:pt-1 pt-5'>
          <Link href="#about">
            <button className='hero-button'>
                About
            </button>
          </Link>
          <Link href="#experience">
            <button className='hero-button'>
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className='hero-button'>
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className='hero-button'>
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero;