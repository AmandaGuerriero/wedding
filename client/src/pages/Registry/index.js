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
  const [formState, setFormState] = useState({ name: '', amount: '', nameTracy: '', amountTracy: '', nameKayak: '', amountKayak: ''  });
  const [bears, setBears] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, amount, nameTracy, amountTracy, nameKayak, amountKayak} = formState;

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
      triggerSuccess(nameTracy, amountTracy)
    }
  };

  const handleSubmitKayak = (e) => {
    e.preventDefault();
    if (e.target.nameKayak != null) {
      API.saveBears({
        kayakName: formState.nameKayak,
        kayakAmount: formState.amountKayak
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameKayak, amountKayak)
    }
  };

  useEffect(() => {
    giftTotals();

    // we will use async/await to fetch this data
    async function giftTotals() {
      const response = await fetch("http://localhost:3000/api/amounts");
      const data = await response.json();

      // store the data into our DB
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
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  const handleChangeKayak = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
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
            <div className="gift-title">
              GRIZZLY BEAR VIEWING EXCURSION IN ANCHORAGE
            </div>
            <div>
            <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/BEARS.png' alt='Grizzly Bear' />
            </div>
        {/* Display Bears from the API */}
        {bears && (
          <div className="bears">
            {/* Bears Exeperience Progress */}
            {bears.map((bear, index) => (
              <div key={index}>
                <ProgressBar value={bear.totalBears} max={900}/>
                <div className="amounts-display">
                  <div className="amount-given">${bear.totalBears}</div> 
                  <div className="total-amount">$900</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Submit Bears */}
          <form id="bears-form" onSubmit={handleSubmit}>
            <div className="gift-name">
              <input type="text" name="name" defaultValue={name} placeholder="name" onBlur={handleChange} />
            </div>
            <div className="amount-submit">
              <div className="gift-amount">
                <input type="number" name="amount" defaultValue={amount} placeholder="$0.00" onBlur={handleChange} />
              </div>
              <button data-testid="button" type="submit" className="gift-submit">submit</button>
            </div>
          </form>
        </div>
      {/* Kayak Gift */}
        <div className="kayak-container gift">
          <div className="gift-title">
              FJORD KAYAKING <br /> TOUR IN SEWARD
            </div>
            <div>
            <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/KAYAK.png' alt='Kayak' />
            </div>
        {/* Display Kayak from the API */}
        {bears && (
          <div className="bears">
            {/* Kayak Exeperience Progress */}
            {bears.map((bear, index) => (
              <div key={index}>
              <ProgressBar value={bear.totalKayak} max={900}/>
                <div className="amounts-display">
                  <div className="amount-given">${bear.totalKayak}</div> 
                  <div className="total-amount">$900</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Submit Kayak */}
        <form id="kayak-form" onSubmit={handleSubmitKayak}>
        <div className="gift-name">
              <input type="text" name="nameKayak" defaultValue={nameTracy} placeholder="name" onBlur={handleChangeKayak} />
            </div>
            <div className="amount-submit">
              <div className="gift-amount">
                <input type="number" name="amountKayak" defaultValue={amountTracy} placeholder="$0.00" onBlur={handleChangeKayak} />
              </div>
              <button data-testid="button" type="submit" className="gift-submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GiftsForm;