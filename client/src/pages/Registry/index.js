import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';
import ProgressBar from "../../components/ProgressBar";

function BearsForm() {

  class App extends Component{
    constructor(props) {
      super(props);
      this.state = {response: null};
    }
  }
  const [formState, setFormState] = useState({ name: '', amount: ''});
  const [bears, setBears] = useState(null);

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

  useEffect(() => {
    bearTotals();

    // we will use async/await to fetch this data
    async function bearTotals() {
      const response = await fetch("http://localhost:3000/api/amounts");
      const data = await response.json();

      // store the data into our books variable
      setBears(data) ;
    }
  }, []);

//   async function bearTotals() {
//     API.getTotals()
//     .then(response => {
//       // console.log(response.data.[0].totalBears)
//       // let totalBears = response.data.[0].totalBears
//         setBears(response.data);
//     })
//     .catch(error => {
//       console.log(error)
//     })
// }

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
      {/* <ProgressBar/> */}
         {/* display books from the API */}
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
    </section>
  );
}

export default BearsForm;