import React from 'react'
import styles from './aboutme.module.scss'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { FaGitAlt } from 'react-icons/fa';


const aboutme = () => {
  return (
    <div className={styles.aboutme}>
        <p className={styles.aboutme__title}>Who am I?</p>
        <div className={styles.aboutme__content}>
            <div className={styles.aboutme__content__description}>
                <p> 
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
                <p>Technologies that I use in my projects:</p>
                <div className={styles.aboutme__content__description__icons}>
                    
                    <div className={styles.aboutme__content__description__icon}>
                        <AiFillHtml5 size={40} />
                        <p>HTML5</p>
                    </div>
                    
                    <div className={styles.aboutme__content__description__icon}>
                        <DiCss3 size={40}/>
                        <p>CSS3</p>
                    </div>
                    
                    <div className={styles.aboutme__content__description__icon}>
                        <DiJavascript1 size={40}/>
                        <p>Javascript</p>
                    </div>
                    
                    <div className={styles.aboutme__content__description__icon}>
                        <DiReact size={40}/>
                        <p>ReactJS</p>
                    </div>
                    
                    <div className={styles.aboutme__content__description__icon}>
                        <DiSass size={40}/>
                        <p>SCSS</p>
                    </div>
                    <div className={styles.aboutme__content__description__icon}>
                        <FaGitAlt size={40} color/>
                        <p>GIT</p>
                    </div>
                </div>
            </div>
            <div className={styles.aboutme__content__picture}>
                <img src='./fall.png' className={styles.aboutme__content__image} />
                <div className={styles.aboutme__content__shadow}></div>
            </div>
        </div>
    </div>
  )
}

export default aboutme;

