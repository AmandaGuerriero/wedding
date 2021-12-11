import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';
import ProgressBar from "../../components/ProgressBar";

function GiftsForm() {

  class App extends Component{
    constructor(props) {
      super(props);
    }
  }
  const [formState, setFormState] = useState({ name: '', amount: '', nameTracy: '', amountTracy: '' });
  const [bears, setBears] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, amount, nameTracy, amountTracy} = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name != null) {
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

  const handleSubmitTracy = (e) => {
    e.preventDefault();
    if (e.target.nameTracy != null) {
      API.saveBears({
        tracyName: formState.nameTracy,
        tracyAmount: formState.amountTracy
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      // triggerSuccess(name, amount)
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
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  const handleChangeTracy = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.nameTracy]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  function triggerSuccess(name) {
    window.alert("Thank you," + name + "!")
    window.location.href = "/registry"
  }


  return (
    <section>
      <div className="gifts-container">
        {/* Bears Gift */}
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
          {/* <select>
             {options.map((option) => (
              <option value={option.value} onBlur={handleChange}>{option.label}</option>
          ))}
          </select> */}
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
      </div>
      {/* Tracy Arm Gift */}
      <div className="tracy-container gift">
        <h1>Help us go to Tracy Arm</h1>
        <h2>in Alaska</h2>
        <form id="tracy-form" onSubmit={handleSubmitTracy}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="nameTracy" defaultValue={name} onBlur={handleChangeTracy} />
          </div>
          <div>
            <label htmlFor="name">Amount:</label>
            <input type="number" name="amountTracy" defaultValue={amountTracy} onBlur={handleChangeTracy} />
          </div>
          <button data-testid="button" type="submit">Submit</button>
        </form>
      {bears && (
        <div className="bears">
          {/* Tracy Arm Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
              <ProgressBar value={bear.totalTracy} max={360}/>
              <div>${bear.totalTracy} out of $360</div>
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