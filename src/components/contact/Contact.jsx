import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_590a7gs', 'template_0f9iie3', form.current, 'jsdhneJaFe3n7uCtF')
    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4> Email</h4>
            <h5>binemma.apply@gmail.com</h5>
            <a href="mailto:binemma.apply@gmail.com" target="_blank">Send a message</a>

          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' row="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact