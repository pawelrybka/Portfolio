import React from 'react'
import styles from './project.module.scss'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';

const project = () => {
  return (
    <div className={styles.project} id='projects'>
        <p className={styles.project__title}>Projects</p>
        <div className={styles.project__section}>
            
            <div className={styles.project__section__first}>
                <img src='bird.png' className={styles.project__section__picture}/>
                <p className={styles.project__section__des}>Flappy bird clone</p>
                <div className={styles.project__section__icons}>
                    <AiFillHtml5 size={60}/>
                    <DiCss3 size={60}/>
                    <DiJavascript1 size={60}/>
                </div>
                <div className={styles.project__section__buttons}>
                    <a href='https://pawelrybka.github.io/Flappy-Bird-Clone/'>View</a>
                    <a href='https://github.com/pawelrybka/Flappy-Bird-Clone'>Code</a>
                </div>
            </div>
        
            <div className={styles.project__section__first}>
                <img src='calculator.png' className={styles.project__section__picture}/>
                <p className={styles.project__section__des}>iOS calculator clone</p>
                <div className={styles.project__section__icons}>
                    <AiFillHtml5 size={60}/>
                    <DiCss3 size={60}/>
                    <DiJavascript1 size={60}/>
                </div>
                <div className={styles.project__section__buttons}>
                    <a href='https://pawelrybka.github.io/IOS-Calculator-Clone/'>View</a>
                    <a href='https://github.com/pawelrybka/IOS-Calculator-Clone'>Code</a>
                </div>
            </div>
        
            <div className={styles.project__section__first}>
                <img src='weather.png' className={styles.project__section__picture}/>
                <p className={styles.project__section__des}>Weather app</p>
                <div className={styles.project__section__icons}>
                    <DiCss3 size={60}/>
                    <DiReact size={60}/>
                </div>
                <div className={styles.project__section__buttons}>
                    <a href='https://weather-app-theta-mocha.vercel.app/'>View</a>
                    <a href='https://github.com/pawelrybka/Weather-app'>Code</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default project;
