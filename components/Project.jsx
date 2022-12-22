import React from 'react'
import Image from 'next/image'
import bird from '../images/bird.png'
import calculator from '../images/calculator.png'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'


const Project = () => {
    return (
        <div className= 'h-fit w-screen bg-white flex flex-col items-center py-10 gap-10'>
            <p className='text-center text-6xl'>Projects</p> 
            <div className='flex flex-col gap-10 md:flex-row'>
                
                <div className='h-96 w-80 border border-black flex flex-col justify-start items-center'>
                    <Image src={bird} width={180} className='py-3'/>
                    <p className='text-2xl'>Flappy Bird Clone</p>
                    <div className='flex py-5 gap-7'>
                        <AiFillHtml5 size={40} />
                        <DiCss3 size={40}/>
                        <IoLogoJavascript size={40} />
                    </div>
                    <div className='flex gap-10'>
                        <button className='text-2xl bg-black text-white px-2 py-1 rounded-full'>Code</button>
                        <button className='text-2xl bg-black text-white px-2 py-1 rounded-full'>View</button>
                    </div>    
                </div>
                
                <div className='h-96 w-80 border border-black flex flex-col justify-start items-center'>
                    <Image src={calculator} width={180} className='py-3'/>
                    <p className='text-2xl'>IOS calculator clone</p>
                    <div className='flex py-5 gap-7'>
                        <AiFillHtml5 size={40} />
                        <DiCss3 size={40}/>
                        <IoLogoJavascript size={40} />
                    </div>
                    <div className='flex gap-10'>
                        <button className='text-2xl bg-black text-white px-2 py-1 rounded-full'>Code</button>
                        <button className='text-2xl bg-black text-white px-2 py-1 rounded-full'>View</button>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Project;




