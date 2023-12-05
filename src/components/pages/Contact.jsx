import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact(props) {


  emailjs.init('nhvfS8gWUWsTR-aua');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [blankMessage, setblankMessage] = useState(false);
  const [emailMessage, setemailMessage] = useState(false);
  const [box, setBox]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: nameInput,
      email: emailInput,
      message: messageInput,
    };
    emailjs.sendForm('service_kfup03p', 'template_pe5bgk4', document.querySelector('.contact-form'))
    .then(function() {
        console.log('SUCCESS!');
        setNameInput('');
        setEmailInput('');
        setMessageInput('');
    }, function(error) {
        console.log('FAILED...', error);

    });


  };

  const handleBlur = (e) => {
    if(!e.target.value){
      setBox(e.target.name);
      setblankMessage(true)

    } else {
      setblankMessage(false)
    }
  }

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(!emailRegex.test(emailInput)){
      setemailMessage(true);
    }else {
      setemailMessage(false);
    }
    setEmailInput(e.target.value);
  }
  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  }

  return (
    <div className='row offset-md-2'>
      <div className='col-lg-6 col-md-9 col-sm-12 m-2'>
      <h2>Send me a message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label for="name" className='form-label'>Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={nameInput}
          name="name"
          className="name-input form-control from-control-sm m-2"
          onBlur={handleBlur}
          onChange={handleNameChange}
        ></input>
          <label for="email" className='form-label'>Email</label>
          <input
          type="text"
          placeholder="john@example.com"
          value={emailInput}
          name="email"
          className="email-input form-control from-control-sm m-2"
          onBlur={handleBlur}
          onChange={handleEmailChange}
        ></input>
                <label for="message" className='form-label'>Message</label>
                <textarea
          type="text"
          placeholder=""
          value={messageInput}
          name="message"
          className="message-input form-control m-2"
          onBlur={handleBlur}
          onChange={handleMessageChange}
          rows="5"
        ></textarea>
        {emailMessage && <div>Not a valid email</div>}
        {blankMessage && <div> {box} is required</div>}
        <button type='submit' className="m-2 contact-button btn btn-outline-info">Send</button>
      </form>
      </div>
    </div>
  );
}
