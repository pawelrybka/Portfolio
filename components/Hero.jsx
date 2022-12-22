import React from 'react'
import me from '../images/me.jpg'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Hero = () => {
  return (
    <div className= 'flex justify-center items-center h-screen w-screen bg-slate-200'>
        <div className='flex-col gap-11'>
            <Image src={me} width={300} className='rounded-full' />
            <div className='p-4'>
                <h1 className='text-center text-6xl'>Paweł Rybka</h1>
                <h2 className='text-center text-3xl'>Frontend Developer</h2>
            </div>
            <div className='flex justify-center gap-5'>
                <AiFillGithub size={60} className='hover:scale-125 ease-out duration-300' />
                <AiFillLinkedin size={60} className='hover:scale-125 ease-out duration-300' />
            </div>
        </div>
    </div>
  )
}

export default Hero;


