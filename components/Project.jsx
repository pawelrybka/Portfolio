import React from 'react'
import Image from 'next/image'
import bird from '../images/bird.png'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'


const Project = () => {
    return (
        <div className= 'h-screen w-screen bg-white flex flex-col items-center'>
            <p className='text-center text-6xl py-10'>Projects</p> 
            <div className='h-96 w-80 border border-black flex flex-col justify-start items-center'>
                <Image src={bird} width={180} className='py-3'/>
                <p className='text-3xl'>Flappy Bird Clone</p>
                <div className='flex py-5 gap-7'>
                    <AiFillHtml5 size={40} />
                    <DiCss3 size={40}/>
                    <IoLogoJavascript size={40} />
                </div>
                <div className='flex gap-20'>
                    <button>Code</button>
                    <button>View</button>
                </div>    



            </div>
        </div>
    )
}

export default Project;




