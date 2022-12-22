import React from 'react'

const Contact = () => {
  return (
    <div className='h-fit w-screen py-10 flex flex-col items-center gap-10'>
        <p className='text-center text-6xl'>Contact with me!</p>
        <form className='flex flex-col items-center h-96 w-96 gap-5 py-2 shadow-xl shadow-zinc-900/50'>
            <input type="text" placeholder='Your email' className='border border-black w-11/12 p-2'/>
            <textarea placeholder='Your message' cols="30" rows="9" className='border border-black w-11/12 resize-none p-2'></textarea>
            <input type="submit" value='Send' className='bg-black text-white p-4 py-1 text-2xl rounded-full'/>
        </form>
    </div>
  )
}

export default Contact;


