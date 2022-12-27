import React from 'react'
import styles from './aboutme.module.scss'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiSass } from 'react-icons/di';



const aboutme = () => {
  return (
    <div className={styles.aboutme}>
        <p className={styles.aboutme__title}>Who am I?</p>
        <div className={styles.aboutme__content}>
            <p className={styles.aboutme__content__description}> 
                I`m Paweł Rybka, web developer from Gliwice. 
                I love building web apps and preety interfaces. 
                I started my developer journey 4 months ago and 
                it is to short to get familiar whith all the web development concepts, 
                there are many things I have to learn, 
                however i think that the most important skill a good programmer should 
                have is the desire to expand your knowledge, 
                and I`m constendly believe in it. 
                I recently graduated from Politechnika Śląska
                after completing Bachelor of Engineering in Automation and Robotics. 
                As a web developer, my goal is to always build applications 
                that are scalable and efficient.
            </p>
            <p>Technologies that I use in projects:</p>
            <div>
                <AiFillHtml5 size={60} />
                <DiCss3 size={60}/>
                <DiJavascript1 size={60}/>
                <DiReact size={60}/>
                <DiSass size={60}/>

            </div>
            <img src='./fall.png' />
        </div>

    </div>
  )
}

export default aboutme;

