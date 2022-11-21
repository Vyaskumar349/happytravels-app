import React from 'react';
import "./ContactFormStyle.css"

function ContactForm() {
  return (
    <div className="ContactForm">
     <h1>Send a message to us!</h1>
     <form>
        <input placeholder='Name'/>
        <input placeholder='Email'/>
        <input placeholder='subject'/>
        <textarea placeholder='message' rows="4"></textarea>
        <button className='btn'>Send Message</button>
     </form>
    </div>
  )
}

export default ContactForm;