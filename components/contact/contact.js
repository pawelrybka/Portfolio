import React from 'react'
import styles from './contact.module.scss'


const contact = () => {
  return (
    <div className={styles.contact} id='contact'>
        <p className={styles.contact__title}>Contact with me!</p>
        <form>
          <input type='text' placeholder="Your email" required></input>
          <textarea type="text" name="message" placeholder="Your message" required/>            
          <button type="submit" class="submit">Send</button>
        </form>
    </div>
  )
}

export default contact;