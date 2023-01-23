import styles from './contact.module.css'
import { AiFillLinkedin } from 'react-icons/Ai';
import { BsDiscord } from 'react-icons/Bs';
import { HiOutlineMailOpen } from 'react-icons/Hi';

const Contact = () => {
    return(
        <div className={styles.contact}>
            <h1>Contact with me!</h1>
                <a href="https://www.linkedin.com/in/pawe%C5%82-rybka-8454a1251/">
                    <div className={styles.square}>
                        <AiFillLinkedin size={50}/>
                        <p className={styles.name}>Linkedin</p>
                    </div>
                </a>
                
            <div className={styles.square}>
                <BsDiscord size={50}/>
                Discord
            </div>
            
            <div className={styles.square}>
                <HiOutlineMailOpen size={50}/>
                Email
            </div>
        
        </div>
    )
}

export default Contact

