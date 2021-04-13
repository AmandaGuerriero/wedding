import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";

function UpdatesForm() {
  const [formState, setFormState] = useState({ name: '', email: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
      API.registerUpdates({
        name: formState.name,
        emailAddress: formState.email
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);    
  };

  const handleChange = (e) => {
    // if (e.target.name === 'email') {
    //   const isValid = validateEmail(e.target.value);
    //   if (!isValid) {
    //     setErrorMessage('Your email is invalid.');
    //   } else {
    //     setErrorMessage('');
    //   }
    // } else {
    //   if (!e.target.value.length) {
    //     setErrorMessage(`${e.target.name} is required.`);
    //   } else {
    //     setErrorMessage('');
    //   }
    // }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      {/* <h1> Coming Soon </h1> */}
      <h1>Register for Updates!</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default UpdatesForm;