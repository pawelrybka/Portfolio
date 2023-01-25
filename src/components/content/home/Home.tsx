import styles from './home.module.css'
import { BsGithub } from 'react-icons/bs';


const index = () => {
  return (
    <>
        <div className={styles.home}>
          
          
          <div className={styles.home__first}>
            <h1>Hi, I am <span>Pablo.</span></h1> 
          </div>


          <div className={styles.home__second}>
            <h1>My <span>repositories.</span></h1>
            <a href="https://github.com/pawelrybka">
              <button>My repositories<BsGithub size={32}/></button>
            </a>
          </div>


          <div className={styles.home__third}>
            <h1>My <span>skills.</span></h1>
            <div className={styles.skills}>
              
              <div className={styles.skills__skill}>
                <p>HTML</p>
                <img className={styles.skill__icon} src="./html.svg" alt="html-icon" />
              </div>
            
              <div className={styles.skills__skill}>
                <p>CSS</p>
                <img className={styles.skill__icon} src="./css.svg" alt="html-icon" />
              </div>

              <div className={styles.skills__skill}>
                <p>Javascript</p>
                <img className={styles.skill__icon} src="./javascript.svg" alt="html-icon" />
              </div>

              <div className={styles.skills__skill}>
                <p>Typescript</p>
                <img className={styles.skill__icon} src="./typescript.svg" alt="html-icon" />
              </div>

              <div className={styles.skills__skill}>
                <p>React</p>
                <img className={styles.skill__icon} src="./react.svg" alt="html-icon" />
              </div>

              <div className={styles.skills__skill}>
                <p>Git</p>
                <img className={styles.skill__icon} src="./git.svg" alt="html-icon" />
              </div>

              <div className={styles.skills__skill}>
                <p>Sass</p>
                <img className={styles.skill__icon} src="./sass.svg" alt="html-icon" />
              </div>

              <div className={styles.skills__skill}>
                <p>Next JS</p>
                <img className={styles.skill__icon} src="./next.png" alt="html-icon" />
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default index
