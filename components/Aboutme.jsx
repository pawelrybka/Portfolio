import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { DiGit } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import Image from 'next/image'
import fall from '../images/fall.png'

const Aboutme = () => {
  return (
    <div className='flex flex-col items-center gap-10 h-fit w-screen py-10 bg-slate-200'>
        <p className='text-6xl'>Who am I ? </p>
        <p className='px-6 text-lg'> I`m Paweł Rybka, web developer from Gliwice. 
            I love building web apps and preety interfaces. 
            I started my developer journey 4 months ago and 
            it is to short to get familiar whith all the web development concepts, 
            there are many things I have to learn, however i think that the most important skill 
            a good programmer should have is the desire to expand your knowledge, 
            and I`m constendly believe in it. 
            I recently graduated from Politechnika Śląska after 
            completing Bachelor of Engineering in Automation and Robotics. 
            As a web developer, my goal is to always build applications that are scalable and efficient.
        </p> 
        <div className='flex flex-col justify-center items-center gap-10'>
            <p className='text-center text-lg'>Technologies that I use in projects:</p>
            <div className='flex gap-5'>
                
                <div className='flex flex-col items-center'>
                    <AiFillHtml5 size={50} />
                    <p>HTML5</p>    
                </div>    
                <div className='flex flex-col items-center'>
                    <DiCss3 size={50} />
                    <p>CSS3</p>    
                </div> 
                <div className='flex flex-col items-center'>
                    <IoLogoJavascript size={50} />
                    <p>Javascript</p>    
                </div>  
                                     
                <div className='flex flex-col items-center'>
                    <DiGit size={50} />
                    <p>GIT</p>    
                </div> 
                <div className='flex flex-col items-center'>
                    <DiReact size={50} />
                    <p>React</p>    
                </div> 
                <div className='flex flex-col items-center'>
                    <SiTailwindcss size={50} />
                    <p>Tailwind CSS</p>    
                </div> 
            </div>
        </div>
        <Image src={fall} />

    
    </div>
  )
}

export default Aboutme;
