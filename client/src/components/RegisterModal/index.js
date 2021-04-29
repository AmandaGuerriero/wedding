import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';

function RegisterModal (props) {
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
  
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  function triggerSuccess(name) {
    window.alert("Thanks" + name + "you are successfully registered ")
  }

  return (
    <div className="modal-updates">
      <section className="register-modal-body">
      <div className="modal-header">
      <div className="modal-updates-header">Please register your email address for updates on lodging and detailed instructions closer to the wedding. (we promise to not spam you with emails!)</div>
      <span className="modal-close-icon" onClick={props.handleClose}>x</span>
        </div>
        <form id="modal-contact-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <label htmlFor="name" className="modal-updates-field-name">Name:</label>
            <input type="text" className="modal-updates-field" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="email-fields">
            <label htmlFor="email" className="modal-updates-field-name">Email address:</label>
            <input type="email" className="modal-updates-field" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <button data-testid="button" type="submit" className="modal-updates-submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default RegisterModal;