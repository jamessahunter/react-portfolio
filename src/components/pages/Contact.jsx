import { useState } from 'react';

export default function Contact(props) {

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target)
    console.log(nameInput);
    console.log("works")

    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if(!emailRegex.test(emailInput)){
      alert("Not a valid email");
    }
    // props.onSubmit({
      // id: Math.random(Math.floor() * 1000),
      // text: input,
      // eagerness: eagerness,
    // });

    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  const handleBlur = (e) => {
    console.log(e.target.value)
    if(!e.target.value){
      alert('This field is required')
    }
  }


  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  }
  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  }


  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="John Doe"
          value={nameInput}
          name="text"
          className="name-input"
          onBlur={handleBlur}
          onChange={handleNameChange}
        ></input>
          <input
          type="text"
          placeholder="jonh@example.com"
          value={emailInput}
          name="email"
          className="email-input"
          onBlur={handleBlur}
          onChange={handleEmailChange}
        ></input>
                <input
          type="text"
          placeholder=""
          value={messageInput}
          name="message"
          className="message-input"
          onBlur={handleBlur}
          onChange={handleMessageChange}
        ></input>
        <button className="contact-button">Send</button>
      </form>
    </div>
  );
}
