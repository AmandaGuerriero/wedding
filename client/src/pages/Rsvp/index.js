import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';

function RsvpForm() {
  const [formState, setFormState] = useState({ name: '', email: '', stay: '', attending: '', attendDetails: '', food: '', diet: ''});
  const [selectionState, setSelectionState] = useState({attending: ''});
  const [foodState, setFoodState] = useState({food: ''});
  const [rsvp, setRsvp] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const {name, email, stay, attendDetails, diet} = formState;
  const {attending} = selectionState;
  const {food} = foodState;


  useEffect(() => {
    rsvpResponse();

    // we will use async/await to fetch this data
    async function rsvpResponse() {
      const response = await fetch("http://localhost:3000/api/rsvp");
      const data = await response.json();

      // store the data into our DB
      setRsvp(data) ;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name !=null) {
      API.saveRsvp({
        name: formState.name,
        emailAddress: formState.email,
        attending: selectionState,
        attendDetails: formState.attendDetails,
        accom: formState.stay,
        food: foodState,
        diet: formState.diet
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);  
      triggerSuccess(name, email)
    }
  };

  const handleChange = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  const handleRSVPChange = (e) => {
      setSelectionState(e.target.value);
      console.log('Handle Form', selectionState);
  };

  const handleFoodChange = (e) => {
    setFoodState(e.target.value);
    console.log('Handle Form', foodState);
};


  function triggerSuccess(name) {
    window.alert("Thank you so much for your contribution toward making our honeymoon fun and special!")
    window.location.href = "/rsvp"
  }

  return (
    <section>
      <div className="outline">
      <div className="rsvp-border">
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
                <input type="email" name="email" placeholder=" email@gmail.com" defaultValue={email} onBlur={handleChange} />
              </div>
              <div className="rsvp-info">
                <label htmlFor="stay"></label>
                {/* Change name = to something meaningful */}
                <input type="text" name="stay" placeholder=" accomodation (if known)" defaultValue={stay} onBlur={handleChange} />
              </div>
            </div>
            <div className="rsvp-reply-container rsvp-container">
              <div className="rsvp-options">
                <label title="item1" className="rsvp-reply">
                  <input type="radio" name="selection" value="accepts with gusto" checked={selectionState === 'accepts with gusto'} onChange={handleRSVPChange}/> 
                  accepts with gusto &nbsp;
                  <img />
                </label>
                <label title="item2" className="rsvp-reply">
                  <input type="radio" name="selection" value="accepts with indifference" checked={selectionState === 'accepts with indifference'} onChange={handleRSVPChange}/>
                  accepts with indifference &nbsp;
                  <img />
                </label>   
                <label title="item3" className="rsvp-reply">
                  <input type="radio" name="selection" value="declines with glee" checked={selectionState === 'declines with glee'} onChange={handleRSVPChange}/>
                  declines with glee &nbsp;
                  <img />
                </label>
                <label title="item4" className="rsvp-reply">
                  <input type="radio" value="declines with remorse" checked={selectionState === 'declines with remorse'} onChange={handleRSVPChange}/>
                  declines with remorse &nbsp;
                  <img />
                </label>
              </div>
              </div>
          </div>
          <div id="rsvp-food">
            <div id="food-options">
            <div className="food-container">
                <div className="food">
                <label title="food1">
                <input type="radio" name="food" value="tri-tip & chicken" checked={foodState === 'tri-tip & chicken'} onChange={handleFoodChange}/>
                  tri-tip & chicken
                  <img />
                </label>
                </div>
                <div className="food">
                <label title="food2">
                <input type="radio" name="food" value="salmon" checked={foodState === 'salmon'} onChange={handleFoodChange}/>
                  salmon
                  <img />
                </label>   
                </div>
                <div className="food">
                <label title="food3">
                <input type="radio" name="food" value="veggie" checked={foodState === 'veggie'} onChange={handleFoodChange}/>
                  Vegetarian
                  <img />
                </label>
                </div>
                <div className="food">
                <label title="food4">
                <input type="radio" name="food" value="vegan" checked={foodState === 'vegan'} onChange={handleFoodChange}/>
                  Vegan
                  <img />
                </label>
                </div>
              </div>
            </div>
            <div className="diet">
            <label htmlFor="diet"></label>
                {/* Change name = to something meaningful */}
                <input type="text" name="diet" placeholder="allergy/dietary concerns" defaultValue={diet} onBlur={handleChange} />
            </div>
          <button data-testid="button" type="submit" className="rsvp-submit">Submit</button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}

export default RsvpForm;