import styles from './contact.module.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord, BsMenuButton } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';


const Contact = () => {
    
    const [buttonText, setButtonText] = useState("Email")

    const changeText = () => {
        setButtonText("Coppied!")
    }
    
    return(
        <div className={styles.contact}>
            <h1>Contact with me!</h1>
            <a href="https://www.linkedin.com/in/pawe%C5%82-rybka-8454a1251/" target='_blank' rel="noreferrer">
                <div className={styles.square}>
                    <AiFillLinkedin size={50}/>
                    <p className={styles.name}>Linkedin</p>
                </div>
            </a>
            
            <a href="https://discord.gg/K4HCcpurPa">
                <div className={styles.square}>
                    <BsDiscord size={50}/>
                    Discord
                </div>
            </a>    
                
            <CopyToClipboard text='rrybka1999@gmail.com'>
                <div className={styles.square} onClick={changeText}>
                    <HiOutlineMailOpen size={50}/>
                    {buttonText}
                </div>
            </CopyToClipboard>

        </div>
    )
}

export default Contact

