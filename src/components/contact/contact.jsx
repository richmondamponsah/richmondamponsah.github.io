import React from 'react'
import './contact.css'
import {AiOutlineMail }from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// mailjs
import{ useRef } from 'react' 
import emailjs  from '@emailjs/browser'

const Contact = () => {
  //--------------- Mailjs function
  //reference hook
  const form = useRef(); 
  //onSubmit
  const sendEmail = (e) => { 
    e.preventDefault();
  // -------------------service ID ------Template ID ---------------------- Public key
    emailjs.sendForm('service_8cjpgrl', 'template_nhlqk5p', form.current, 'o6K_TsJO4BKPYeV9G')
      
    e.target.reset() // resets the form after submit 
  };
  // --------------- Mailjs End

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contacts</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>support@egattor.com</h5>
            <a href="mailto:richmondamponsah@icloud.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Lorem, ipsum.</h5>
            <a href="hhps://m.me/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+123-456-7890</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567890" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Email Address' required />
          <textarea name="message" rows="7" placeholder="Message" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact