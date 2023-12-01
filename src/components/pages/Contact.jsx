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
          onChange={handleNameChange}
        ></input>
          <input
          type="text"
          placeholder="jonh@example.com"
          value={emailInput}
          name="email"
          className="email-input"
          onChange={handleEmailChange}
        ></input>
                <input
          type="text"
          placeholder=""
          value={messageInput}
          name="message"
          className="message-input"
          onChange={handleMessageChange}
        ></input>
        <button className="contact-button">Send</button>
      </form>
    </div>
  );
}
