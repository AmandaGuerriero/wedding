import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';

function RsvpForm() {
  const [formState, setFormState] = useState({ name: '', email: '', stay: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, stay} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
      API.saveRsvp({
        name: formState.name,
        email: formState.email
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
      <div id="rsvp-border">
        <div id="rsvp-header">
          <div className="rsvp-respond">please respond by:</div>
          <div className="rsvp-when">the 16th of May</div>
        </div>
        <form id="rsvp-form" onSubmit={handleSubmit}>
          <div id="rsvp-who">
            <div id="rsvp-info-container" className="rsvp-container">
              <div className="rsvp-info">
                <label htmlFor="name"></label>
                {/* Change name = to something meaningful */}
                <input type="text" name="name" placeholder=" person(s)" defaultValue={name} onBlur={handleChange} />
              </div>
              <div className="rsvp-info">
                <label htmlFor="email"></label>
                {/* Change name = to something meaningful */}
                <input type="email" name="email" placeholder=" email@gmail.com"defaultValue={email} onBlur={handleChange} />
              </div>
              <div className="rsvp-info">
                <label htmlFor="stay"></label>
                {/* Change name = to something meaningful */}
                <input type="text" name="stay" placeholder=" accomodation (if known)"defaultValue={stay} onBlur={handleChange} />
              </div>
            </div>
            <div id="rsvp-reply-container" className="rsvp-container">
              <h1>Testing</h1>
              <div className="rsvp-reply">
                <input type="radio" id="accept1" name="reply" value="accept1" onBlur={handleChange} />
                <label htmlFor="accept1">accepts with gusto</label>
              </div>
              <div className="rsvp-reply">
                <input type="radio" id="accept2" name="reply" value="accept2" onBlur={handleChange} />
                <label htmlFor="accept1">accepts with indifference</label>
              </div>
            </div>
          </div>
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default RsvpForm;