import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';

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
      triggerSuccess(name)
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

  function triggerSuccess(name) {
    window.alert("Great! You are successfully registered for updates, thanks " + name + "!")
    window.location.href = "/"
  }

  return (
    <section className="register-body">
      <div className="updates-header">Please register your email address for updates on lodging and detailed instructions closer to the wedding. (we promise to not spam you with emails!)</div>
      <form id="updates-contact-form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name" className="updates-field-name">Name:</label>
          <input type="text" className="updates-field" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="email">
          <label htmlFor="email" className="updates-field-name">Email address:</label>
          <input type="email" className="updates-field" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <button data-testid="button" type="submit" className="updates-submit">Submit</button>
      </form>
    </section>
  );
}

export default UpdatesForm;