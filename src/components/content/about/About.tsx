import styles from './about.module.css'



const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__description}>
        <p className={styles.title}>Who am I ?</p>
        <p className={styles.me}>
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
      </div>
      <img src="/me.png" alt="me-picture" className={styles.about__picture}/>

    </div>
  )
}

export default About


