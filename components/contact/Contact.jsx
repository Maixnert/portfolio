import React from 'react'
import './Contact.css'
import {MdEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ip1vf2i', 'template_uygwozn', form.current, '5zyJveVLiscssXzx7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Pojdme se poznat</h5>
      <h2>Kontaktujte mě</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='mail contact__option-icon'/>
            <h4>Email</h4>
            <h5>tomas@maixnert.cz</h5>
            <a href="mailto:tomas@maixnert.cz" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='messenger contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Tomáš Maixner</h5>
            <a href="https://m.me/Majormaixner" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='whatsapp contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+420 732 545 969</h5>
            <a href="https://wa.me/732545969" target="_blank">Send a message</a>
          </article>          
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Jméno a příjmení' required />
        <input type="email" name='email' placeholder='Váš Email' required />
        <textarea type="message" name='message' rows="7" placeholder='Váše zpráva' required />
        <button type='submit' className='btn btn-primary btn-submit'>Odeslat zprávu</button>
        </form>
      </div>
    </section>
  )
}

export default Contact