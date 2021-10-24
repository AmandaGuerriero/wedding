import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';
import ProgressBar from "../../components/ProgressBar";

function BearsForm() {
  const [formState, setFormState] = useState({ name: '', amount: ''});

  const [errorMessage, setErrorMessage] = useState('');
  const { name, amount} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
      API.saveBears({
        name: formState.name,
        amount: formState.amount
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(name, amount) 
  };

  function bearTotals() {
    API.getTotals()
    .then(response => console.log(response.data))
    .then(data => console.log(data))
    .catch(err => console.log(err));
    displayBears()
  }

  function displayBears(total) {
    console.log(total)
  }


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
    window.alert("Thank you," + name + "!" + "We are so excited to visit the bears!")
    window.location.href = "/"
  }

  bearTotals()

  return (
    <section>
      <h1>Help us see the Bears</h1>
      <h2>in Alaska</h2>
      <form id="bears-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input type="number" name="amount" defaultValue={amount} onBlur={handleChange} />
        </div>
        <button data-testid="button" type="submit">Submit</button>
      </form>
      <ProgressBar/>
    </section>
  );
}

export default BearsForm;