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
            <div className="rsvp-replay-container rsvp-container">
              <div className="options">
                <label title="item1" className="rsvp-reply">
                  <input type="radio" name="foo" value="0" /> 
                  accepts with gusto &nbsp;
                  <img />
                </label>
                <label title="item2" className="rsvp-reply">
                  <input type="radio" name="foo" value="1" />
                  accepts with indifference &nbsp;
                  <img />
                </label>   
                <label title="item3" className="rsvp-reply">
                  <input type="radio" name="foo" value="2" />
                  declines with glee &nbsp;
                  <img />
                </label>
                <label title="item4" className="rsvp-reply">
                  <input type="radio" name="foo" value="3" />
                  declines with remorse &nbsp;
                  <img />
                </label>
              </div>
              </div>
          </div>
          <div id="rsvp-food">
            <div id="food-options">
            <div className="food-container">
                <label title="food1">
                  <input type="radio" name="foo" value="4" /> 
                  tri-tip & chicken
                  <img />
                </label>
                <label title="food2">
                  <input type="radio" name="foo" value="5" />
                  salmon
                  <img />
                </label>   
                <label title="food3">
                  <input type="radio" name="foo" value="6" />
                  vegan paella
                  <img />
                </label>
              </div>
            </div>
          <button data-testid="button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RsvpForm;