import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section class="contact">
      <h1 data-testid="h1tag" class="text-primary"
      style={{ 
        padding: '30px',
      }}
      >Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" class="text-primary"
          style={{ 
            padding: '30px',
            
            
          }}
          >Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}
            style={{
              color: '#32434d',
              width: '50%',
              backgroundColor: 'lightblue',
              padding: '10px',
              borderRadius: '5px',
            }} 
            />
     
          <label htmlFor="email" class="text-primary"
          style={{ 
            padding: '30px',
          }}
          >Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange}
            style={{
              color: '#32434d',
              width: '50%',
              backgroundColor: 'lightblue',
              padding: '10px',
              borderRadius: '5px'
            }}
          />
      
          <label htmlFor="message" class="text-primary"
          style={{ 
            padding: '30px',
          }}
          >Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}
            style={{
              color: '#32434d',
              width: '50%',
              backgroundColor: 'lightblue',
              padding: '10px',
              borderRadius: '5px'
            }}  />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text" class="text-primary">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" class="button" type="submit"
          style={{
            color: '#8867ad',
            width: '50%',
            backgroundColor: 'lightblue',
            padding: '10px',
            margin: '30px',
            borderRadius: '5px',
            
          }}  
          >Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;