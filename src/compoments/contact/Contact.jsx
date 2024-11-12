import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y53vtoj', 'template_x7jbapo', form.current, 'n6yHkCiIl6BOKP7Su')
     e.target.reset()
  };
  return (
    <section id='contact'>
     <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className="container contact-container">
      <div className="contact-options">
        <article className="contact-option">
        <MdEmail className='contact-icon'/>
          <h4>Email</h4>
          <h5>koushiksaha1195@gmail.com</h5>
          <a href="mailto:koushiksaha1195@gmail.com" rel="noreferrer"  target="_blank" className='icon-text'> Send a message</a>
        </article>
        <article className="contact-option">
        <FaFacebookMessenger className='contact-icon'/>
          <h4>Messenger</h4>
          <h5>Koushik Saha</h5>
          <a href="https://m.me/profile.php?id=100049054479363" rel="noreferrer"  target="_blank" className='icon-text'> Send a message</a>
        </article>
        <article className="contact-option">
        <BsWhatsapp className='contact-icon'/>
          <h4>WhatsApp</h4>
          <h5>+919775201251</h5>
          <a href="https://wa.me/+919775201251" rel="noreferrer"  target="_blank" className='icon-text'> Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name'placeholder='Your Full Name'required />
      <input type="email" name='email' placeholder='Your Email'  required/>
      <textarea name="message"  rows="7" placeholder='Your Message'required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>

      </form>
     </div>
    </section>
  )
}

export default contact
 
