import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';
import ProgressBar from "../../components/ProgressBar";

function GiftsForm() {

  class App extends Component{
    constructor(props) {
      super(props);
      this.state = {response: null};
    }
  }
  const [formState, setFormState] = useState({ name: '', amount: '', what: ''});
  const [bears, setBears] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, amount, what} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.what === '') {
      API.saveBears({
        name: formState.name,
        amount: formState.amount
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(name, amount)
    }
  };

  useEffect(() => {
    giftTotals();

    // we will use async/await to fetch this data
    async function giftTotals() {
      const response = await fetch("http://localhost:3000/api/amounts");
      const data = await response.json();

      // store the data into our books variable
      setBears(data) ;
    }
  }, []);


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
    window.location.href = "/registry"
  }


  return (
    <section>
      <div className="gifts-container">
        <div className="bear-container gift">
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
          <div>
            <label htmlFor="radio">What:</label>
            <input type="radio" name="radio" defaultValue={what} onBlur={handleChange} />
          </div>
          <button data-testid="button" type="submit">Submit</button>
        </form>
      {/* display Bears from the API */}
      {bears && (
        <div className="bears">
          {/* Bear Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
              <ProgressBar value={bear.totalBears} max={900}/>
              <div>${bear.totalBears} out of $900</div>
            </div>
          ))}
        </div>
      )}
      {bears && (
        <div className="bears">
          {/* Bear Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
              <ProgressBar value={bear.totalTracy} max={900}/>
              <div>${bear.totalTracy} out of $900</div>
            </div>
          ))}
        </div>
      )}
        </div>
      </div>
    </section>
  );
}

export default GiftsForm;