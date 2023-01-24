import styles from './home.module.css'

const index = () => {
  return (
    <>
        <div className={styles.home}>
          <h1 className={styles.home__title}>Hi, I am <span>Pablo.</span></h1> 
          <h1 className={styles.home__title}>My <span>skills</span></h1>
          
          <div className={styles.home__skills}>
            
            <div className={styles.skill}>
              <p>HTML</p>
              <img className={styles.skill__icon} src="./html.svg" alt="html-icon" />
            </div>
          
            <div className={styles.skill}>
              <p>CSS</p>
              <img className={styles.skill__icon} src="./css.svg" alt="html-icon" />
            </div>

            <div className={styles.skill}>
              <p>JavaScript</p>
              <img className={styles.skill__icon} src="./javascript.svg" alt="html-icon" />
            </div>

            <div className={styles.skill}>
              <p>TypeScript</p>
              <img className={styles.skill__icon} src="./typescript.svg" alt="html-icon" />
            </div>

            <div className={styles.skill}>
              <p>React</p>
              <img className={styles.skill__icon} src="./react.svg" alt="html-icon" />
            </div>

            <div className={styles.skill}>
              <p>Git</p>
              <img className={styles.skill__icon} src="./git.svg" alt="html-icon" />
            </div>

            <div className={styles.skill}>
              <p>Sass</p>
              <img className={styles.skill__icon} src="./sass.svg" alt="html-icon" />
            </div>

            <div className={styles.skill}>
              <p>Next JS</p>
              <img className={styles.skill__icon} src="./next.png" alt="html-icon" />
            </div>
          </div>
        </div>
    </>
  )
}

export default index
