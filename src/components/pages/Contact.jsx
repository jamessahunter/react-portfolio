import { useState } from 'react';

export default function Contact(props) {

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [blankMessage, setblankMessage] = useState(false);
  const [emailMessage, setemailMessage] = useState(false);
  const [box, setBox]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target)
    console.log(nameInput);
    console.log("works")

    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  const handleBlur = (e) => {
    console.log(e.target)
    // console.log(e.target.name);
    if(!e.target.value){
      setBox(e.target.name);
      console.log(box);
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
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label for="name" className='form-label'>Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={nameInput}
          name="name"
          className="name-input form-control from-control-sm"
          onBlur={handleBlur}
          onChange={handleNameChange}
        ></input>
          <label for="email" className='form-label'>Email</label>
          <input
          type="text"
          placeholder="jonh@example.com"
          value={emailInput}
          name="email"
          className="email-input form-control from-control-sm"
          onBlur={handleBlur}
          onChange={handleEmailChange}
        ></input>
                <label for="message" className='form-label'>Message</label>
                <textarea
          type="text"
          placeholder=""
          value={messageInput}
          name="message"
          className="message-input form-control"
          onBlur={handleBlur}
          onChange={handleMessageChange}
          rows="5"
        ></textarea>
        {emailMessage && <div>Not a valid email</div>}
        {blankMessage && <div> {box} is required</div>}
        <button className="contact-button">Send</button>
      </form>
    </div>
  );
}
