import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';

function RsvpForm() {
  const [formState, setFormState] = useState({ name: '', email: '', stay: '', diet: ''});
  const [selectionState, setSelectionState] = useState({attending: ''});
  const [foodState, setFoodState] = useState({food: ''});
  const [welcomeState, setWelcomeState] = useState({welcome: ''});
  const [breakfastState, setBreakfastState] = useState({breakfast: ''});
  const [rsvp, setRsvp] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const {name, email, stay, diet} = formState;
  const {attending} = selectionState;
  const {food} = foodState;
  const {welcome} = welcomeState;
  const {breakfast} = breakfastState;


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
        accom: formState.stay,
        diet: formState.diet,
        food: foodState,
        welcome: welcomeState,
        breakfast: breakfastState
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

  const handleWelcomeChange = (e) => {
    setWelcomeState(e.target.value);
    console.log('Handle Form', welcomeState);
  };

  const handleBreakfastChange = (e) => {
    setBreakfastState(e.target.value);
    console.log('Handle Form', breakfastState);
  };

  function triggerSuccess(name) {
    window.alert("Thanks!")
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
                <input type="text" name="name" placeholder=" guest" defaultValue={name} onBlur={handleChange} />
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
                  <input type="radio" value="accepts with gusto" checked={selectionState === 'accepts with gusto'} onChange={handleRSVPChange}/> 
                  accepts with gusto &nbsp;
                  <img className="square-checkbox" />
                </label>
                <label title="item2" className="rsvp-reply">
                  <input type="radio" value="accepts with indifference" checked={selectionState === 'accepts with indifference'} onChange={handleRSVPChange}/>
                  accepts with indifference &nbsp;
                  <img className="square-checkbox" />
                </label>   
                <label title="item3" className="rsvp-reply">
                  <input type="radio" value="declines with glee" checked={selectionState === 'declines with glee'} onChange={handleRSVPChange}/>
                  declines with glee &nbsp;
                  <img className="square-checkbox" />
                </label>
                <label title="item4" className="rsvp-reply">
                  <input type="radio" value="declines with remorse" checked={selectionState === 'declines with remorse'} onChange={handleRSVPChange}/>
                  declines with remorse &nbsp;
                  <img className="square-checkbox" />
                </label>
              </div>
              </div>
          </div>
          <div className="divider-line-1"></div>
          <div id="rsvp-food">
            <div id="food-options">
            <div className="food-container">
                  <div className="food">
                      tri-tip & chicken
                      <label title="food1">
                      <input type="radio" className="food-label" value="tri-tip & chicken" checked={foodState === 'tri-tip & chicken'} onChange={handleFoodChange}/>
                       <img className="square-checkbox" />
                      </label>
                  </div>
                  <div className="food">
                      salmon
                      <label title="food2">
                      <input type="radio" value="salmon" checked={foodState === 'salmon'} onChange={handleFoodChange}/>  
                      <img className="square-checkbox" />
                    </label>   
                  </div>
                  <div className="food">
                      vegetarian
                      <label title="food3">
                      <input type="radio" value="veggie" checked={foodState === 'veggie'} onChange={handleFoodChange}/>
                      <img className="square-checkbox" />
                    </label>
                  </div>
                  <div className="food">
                      vegan
                      <label title="food4">
                      <input type="radio" value="vegan" checked={foodState === 'vegan'} onChange={handleFoodChange}/>
                      <img className="square-checkbox" />
                    </label>
                  </div>
              </div>
            </div>
            <div className="diet">
            <label htmlFor="diet"></label>
                <input type="text" name="diet" placeholder="allergy/dietary concerns" defaultValue={diet} onBlur={handleChange} />
            </div>
            <div className="divider-line"></div>
            <div className="choices">
                  <div className="yes">yes &nbsp;</div>
                  <div className="no">no &nbsp;</div>
            </div>
            <div className="other-event-options">
                {/* Welcome */}
                <div className="plan-text plan-text-welcome">plan to attend welcome party &nbsp;</div>
                <label title="welcomeY" className="welcome-selection">
                  <input type="radio" value="yes" checked={welcomeState === 'yes'} onChange={handleWelcomeChange}/> 
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img className="circle-checkbox" />
                </label>
                <label title="welcomeN" className="welcome-selection">
                  <input type="radio" value="no" checked={welcomeState === 'no'} onChange={handleWelcomeChange}/> 
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img className="circle-checkbox" />
                </label>
                <br />
              </div>
              <div className="other-event-options">
                {/* Breakfast */}
                <div className="plan-text plan-text-breakfast">plan to attend sendoff breakfast</div>
                <label title="breakfastY" className="breakfast-selection">
                  <input type="radio" value="yes" checked={breakfastState === 'yes'} onChange={handleBreakfastChange}/> 
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img className="circle-checkbox" />
                </label>
                <label title="breakfastN" className="breakfast-selection">
                  <input type="radio" value="no" checked={breakfastState === 'no'} onChange={handleBreakfastChange}/> 
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img className="circle-checkbox" />
                </label>
            </div>
          <button data-testid="button" type="submit" className="rsvp-submit">SUBMIT</button>
          <div className="per-guest">please fill out one form per guest</div>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}

export default RsvpForm;