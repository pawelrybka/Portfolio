import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



const Navbar = () => {
  
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav =() => {
        setNav(!nav)
    }
    
   
    return (
    <div className=' left-0 top-0 w-full z-10 easy-in duration-300 bg-neutral-800 text-white'>
        <div className='m-auto flex justify-end items-center'>
            <ul className='text-xl hidden sm:flex'>
                <li className='px-5 py-3 easy-in duration-300'>
                    <Link href='/#gallery'>Home</Link>
                </li>
                <li className='px-5 py-3 easy-in duration-300'>
                    <Link href='/portfolio'>Project</Link>
                </li>
                <li className='px-5 py-3 easy-in duration-300'>
                    <Link href='/contact'>About me</Link>
                </li>
                <li className='px-5 py-3 easy-in duration-300'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            {/* MOBILE BUTTON */}

            <div className='block sm:hidden z-10 px-5 py-3' onClick={handleNav}>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
              
            {/* MOBILE MENU */}
            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#gallery'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/portfolio'>Work</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;

