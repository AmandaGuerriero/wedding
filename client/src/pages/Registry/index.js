import React, { useState, useEffect, Component } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import './style.css';
import ProgressBar from "../../components/ProgressBar";
import ProgressBarDark from "../../components/ProgressBarDark";

function GiftsForm() {

  class App extends Component{
    constructor(props) {
      super(props);
    }
  }
  const [formState, setFormState] = useState({ name: '', amount: '', nameTracy: '', amountTracy: '', nameKayak: '', amountKayak: '', namePoke: '', amountPoke: '', nameMamas: '', amountMamas: '', nameHawaii: '', amountHawaii: '', nameWailea: '', amountWailea: '', nameSalmon: '', amountSalmon: '', nameAlaska: '', amountAlaska: '', nameBeer: '', amountBeer: '', nameTram: '', amountTram: '', nameSnorkel: '', amountSnorkel: '' });
  const [bears, setBears] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, amount, nameTracy, amountTracy, nameKayak, amountKayak, namePoke, amountPoke, nameMamas, amountMamas, nameHawaii, amountHawaii, nameWailea, amountWailea, nameSalmon, amountSalmon, nameAlaska, amountAlaska, nameBeer, amountBeer, nameTram, amountTram, nameSnorkel, amountSnorkel, } = formState;

  

  useEffect(() => {
    giftTotals();

    // we will use async/await to fetch this data
    async function giftTotals() {
      const response = await fetch("http://localhost:3000/api/amounts");
      const data = await response.json();

      // store the data into our DB
      setBears(data);
    }
  }, []);

  // Handle Kayak
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

  const handleChangeKayak = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // Handle Poke
  const handleSubmitPoke = (e) => {
    e.preventDefault();
    if (e.target.namePoke != null) {
      API.saveBears({
        pokeName: formState.namePoke,
        pokeAmount: formState.amountPoke
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(namePoke, amountPoke)
    }
  };

  const handleChangePoke = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  
  // Handle Tracy
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

  const handleChangeTracy = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // Handle Mamas
  const handleSubmitMamas = (e) => {
    e.preventDefault();
    if (e.target.nameMamas != null) {
      API.saveBears({
        mamasName: formState.nameMamas,
        mamasAmount: formState.amountMamas
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameMamas, amountMamas)
    }
  };

  const handleChangeMamas = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // Handle Hawaii
  const handleSubmitHawaii = (e) => {
    e.preventDefault();
    if (e.target.nameHawaii != null) {
      API.saveBears({
        hawaiiName: formState.nameHawaii,
        hawaiiAmount: formState.amountHawaii
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameHawaii, amountHawaii)
    }
  };

  const handleChangeHawaii = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // Handle Bears
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

  const handleChange = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //Handle Wailea
  const handleSubmitWailea = (e) => {
    e.preventDefault();
    if (e.target.nameWailea != null) {
      API.saveBears({
        waileaName: formState.nameWailea,
        waileaAmount: formState.amountWailea
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameWailea, amountWailea)
    }
  };

  const handleChangeWailea = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //Handle Salmon
  const handleSubmitSalmon = (e) => {
    e.preventDefault();
    if (e.target.nameSalmon != null) {
      API.saveBears({
        salmonName: formState.nameSalmon,
        salmonAmount: formState.amountSalmon
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameSalmon, amountSalmon)
    }
  };

  const handleChangeSalmon = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //Handle Alaska
  const handleSubmitAlaska = (e) => {
    e.preventDefault();
    if (e.target.nameAlaska != null) {
      API.saveBears({
        alaskaName: formState.nameAlaska,
        alaskaAmount: formState.amountAlaska
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameAlaska, amountAlaska)
    }
  };

  const handleChangeAlaska = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //Handle Beer
  const handleSubmitBeer = (e) => {
    e.preventDefault();
    if (e.target.nameBeer != null) {
      API.saveBears({
        beerName: formState.nameBeer,
        beerAmount: formState.amountBeer
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameBeer, amountBeer)
    }
  };

  const handleChangeBeer = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //Handle Tramway
  const handleSubmitTram = (e) => {
    e.preventDefault();
    if (e.target.nameTram != null) {
      API.saveBears({
        tramName: formState.nameTram,
        tramAmount: formState.amountTram
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameTram, amountTram)
    }
  };

  const handleChangeTram = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  //Handle Snorkeling
  const handleSubmitSnorkel = (e) => {
    e.preventDefault();
    if (e.target.nameSnorkel != null) {
      API.saveBears({
        snorkelName: formState.nameSnorkel,
        snorkelAmount: formState.amountSnorkel
      })
        .then(response => response.json())
        .catch(err => console.log(err));
      console.log('Submit Form', formState);
      triggerSuccess(nameSnorkel, amountSnorkel)
    }
  };

  const handleChangeSnorkel = (e) => {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // Trigger Success
  function triggerSuccess(name) {
    window.alert("Thank you so much for your contribution toward making our honeymoon fun and special!")
    window.location.href = "/registry"
  }


  return (
    <section>
      {/* <h1>Coming Soon</h1> */}
      <div className="registry-note">In addition to a few of the more standard registry items on Zola, you can also make a contribution to some of the activities on our honeymoon to Alaska & Hawaii with these two steps:</div>
      <div className="registry-note1"><b>1. Choose an available activity/amount and use either Venmo (scan QR code), Zelle, or a traditional check for the donation.</b></div>
      <div className="registry-note2"><b>2. Please enter your name and amount on the corresponding activity tile and then click SUBMIT so we can keep track of all the gifts!</b></div>
      <div className="registry-note-disclaimer">(We chose not to go through an online service for these donations because they all take a cut of each contribution)</div>
      <div className="gifts-container">
      <div className="zola-container gift">
        <div className="zola-info">
          <img className="zola" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/ZOLA2.png" />
          <a href="https://www.zola.com/registry/guerriolenwedding2022" target="_blank"><div className="zola-link">VISIT REGISTRY</div></a>
        </div>
      </div>
      <div className="venmo-container gift">
        <div className="venmo-info">
          <img className="venmo" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/VENMO.png" />
        </div>
      </div>
      <div className="zelle-container gift">
        <div className="zelle-info">
        <img className="zelle" src="https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/ZELLE1.png" />
          <div className="zelle-send">PLEASE DIRECT ANY <br />ZELLE CONTRIBUTIONS TO:</div>
          <div className="zelle-email">amandaguerriero@yahoo.com</div>
        </div>
      </div>
      <div className="charity-container gift">
        <div className="contribution-container">
          <div className="charity-title">
            WE ARE MATCHING <b>7.16%</b> OF HONEYMOON CONTRIBUTIONS AND DONATING TO:
          </div>
          <div className="charities hawaii-charity">
              CONSERVATION COUNCIL FOR HAWAII
          </div>
          <div className="icon-charity-container">
          <img className="charity-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/TREE.png' alt='Palm Tree' />
           {/* Display Hawaii Donations from API */}
          {bears && (
            <div className="bears">
              {bears.map((bear, index) => (
                <div key={index}>
                <div className="hawaii-contribution">$ {Math.round((bear.totalHawaii + bear.totalBeer + bear.totalPoke + bear.totalWailea + bear.totalSnorkel + bear.totalMamas) * .0716)}</div>
                </div>
              ))}
            </div>
          )}
          </div>
          <div className="charities alaska-charity">
              ALASKA WILDLIFE ALLIANCE
          </div>
          <div className="icon-charity-container">
          <img className="charity-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/BEARS.png' alt='Polar Bear' />
          {/* Display Hawaii Donations from API */}
          {bears && (
            <div className="bears">
              {bears.map((bear, index) => (
                <div key={index}>
                <div className="alaska-contribution">$ {Math.round((bear.totalAlaska + bear.totalBears + bear.totalTracy + bear.totalTram + bear.totalSalmon + bear.totalKayak) * .0716)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
      {/* Kayak Gift */}
      <div className="kayak-container gift">
        <div className="gift-title">
            FJORD KAYAKING <br /> TOUR IN SEWARD
        </div>
        <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/KAYAK.png' alt='Kayak' />
        </div>
      <div className="gift-area">
      {/* <div className="gift-fullfilled">FULFILLED!</div> */}
      {/* Display Kayak from the API */}
      {bears && (
        <div className="bears">
          {/* Kayak Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar className="example" value={bear.totalKayak} max={900} />
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
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="light-box" name="nameKayak" defaultValue={nameKayak} placeholder="name" onBlur={handleChangeKayak} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="light-box" name="amountKayak" defaultValue={amountKayak} placeholder="$0" onBlur={handleChangeKayak} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </div>
      </form>
    </div> 
  </div> 
      {/* Poke Gift */}
      <div className="poke-container gift">
        <div className="gift-title">
            EATING ALL THE <br /> POKE MAUI HAS
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/POKE.png' alt='Poke Bowl' />
          </div>
      <div className="gift-area">
      {/* Display Poke from the API */}
      {bears && (
        <div className="bears">
          {/* Poke Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBarDark value={bear.totalPoke} max={125}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalPoke}</div> 
                <div className="total-amount">$125</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Poke */}
      <form id="poke-form" onSubmit={handleSubmitPoke}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="dark-box" name="namePoke" defaultValue={namePoke} placeholder="name" onBlur={handleChangePoke} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="dark-box" name="amountPoke" defaultValue={amountPoke} placeholder="$0" onBlur={handleChangePoke} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </div>
      </form>
      </div>
    </div>
      {/* Tracy Arm Gift */}
      <div className="tracy-container gift">
        <div className="gift-title">
            TRACY ARM FJORD <br /> TOUR IN JUNEAU
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/BOAT.png' alt='Boat' />
          </div>
      <div className="gift-area">
      {/* Display Tracy from the API */}
      {bears && (
        <div className="bears">
          {/* Tracy Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalTracy} max={360}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalTracy}</div> 
                <div className="total-amount">$360</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Tracy */}
      <form id="tracy-form" onSubmit={handleSubmitTracy}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="light-box" name="nameTracy" defaultValue={nameTracy} placeholder="name" onBlur={handleChangeTracy} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="light-box" name="amountTracy" defaultValue={amountTracy} placeholder="$0" onBlur={handleChangeTracy} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
        </div>
      </div>
      {/* Mamas Gift */}
      <div className="mamas-container gift">
        <div className="gift-title">
            DINNER AT MAMA'S <br /> FISH HOUSE IN MAUI
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/MAMAS.png' alt='Plate' />
          </div>
          <div className="gift-area">
      {/* Display Mamas from the API */}
      {bears && (
        <div className="bears">
          {/* Mamas Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBarDark value={bear.totalMamas} max={400}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalMamas}</div> 
                <div className="total-amount">$400</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Mamas */}
      <form id="mamas-form" onSubmit={handleSubmitMamas}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="dark-box" name="nameMamas" defaultValue={nameMamas} placeholder="name" onBlur={handleChangeMamas} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="dark-box" name="amountMamas" defaultValue={amountMamas} placeholder="$0" onBlur={handleChangeMamas} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </div>
        </form>
      </div>
      </div>
      {/* Hawaii Gift */}
      <div className="hawaii-container gift">
        <div className="gift-title">
          5 NIGHT STAY <br /> IN MAUI
        </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/HAWAII.png' alt='Hawaii' />
          </div>
      <div className="gift-area">
      {/* Display Hawaii from the API */}
      {bears && (
        <div className="bears">
          {/* Hawaii Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBarDark value={bear.totalHawaii} max={3000}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalHawaii}</div> 
                <div className="total-amount">$3000</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Hawaii */}
      <form id="hawaii-form" onSubmit={handleSubmitHawaii}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="dark-box" name="nameHawaii" defaultValue={nameHawaii} placeholder="name" onBlur={handleChangeHawaii} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="dark-box" name="amountHawaii" defaultValue={amountHawaii} placeholder="$0" onBlur={handleChangeHawaii} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
        </div>
      </div>
      {/* Bears Gift */}
      <div className="bear-container gift">
          <div className="gift-title">
            GRIZZLY BEAR VIEWING <br /> EXCURSION IN ANCHORAGE
          </div>
          <div>
            <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/BEARS.png' alt='Grizzly Bear' />
          </div>
      <div className="gift-area">
      {/* Display Bears from the API */}
      {bears && (
        <div className="bears">
          {/* Bears Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
              <ProgressBar value={bear.totalBears} max={1600}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalBears}</div> 
                <div className="total-amount">$1600</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Bears */}
        <form id="bears-form" onSubmit={handleSubmit}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="light-box" name="name" defaultValue={name} placeholder="name" onBlur={handleChange} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="light-box" name="amount" defaultValue={amount} placeholder="$0" onBlur={handleChange} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
        </div>
      </div>
      {/* Wailea Gift */}
      <div className="wailea-container gift">
        <div className="gift-title">
            DINNER AT HOTEL <br /> WAILEA IN MAUI
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/MAMAS.png' alt='Plate' />
          </div>
      <div className="gift-area">    
      {/* Display Wailea from the API */}
      {bears && (
        <div className="bears">
          {/* Wailea Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBarDark value={bear.totalWailea} max={300}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalWailea}</div> 
                <div className="total-amount">$300</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Wailea */}
      <form id="wailea-form" onSubmit={handleSubmitWailea}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="dark-box" name="nameWailea" defaultValue={nameWailea} placeholder="name" onBlur={handleChangeWailea} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="dark-box" name="amountWailea" defaultValue={amountWailea} placeholder="$0" onBlur={handleChangeWailea} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
      </div>
      </div>
      {/* Salmon Gift */}
      <div className="salmon-container gift">
        <div className="gift-title">
            EATING ALL THE <br /> SALMON ALASKA HAS
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/SALMON.png' alt='Salmon' />
          </div>
      <div className="gift-area">
      {/* Display Salmon from the API */}
      {bears && (
        <div className="bears">
          {/* Salmon Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalSalmon} max={400}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalSalmon}</div> 
                <div className="total-amount">$400</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Salmon */}
      <form id="salmon-form" onSubmit={handleSubmitSalmon}>
      <div className="gift-inputs">
      <div className="gift-name">
            <input type="text" className="light-box" name="nameSalmon" defaultValue={nameSalmon} placeholder="name" onBlur={handleChangeSalmon} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="light-box" name="amountSalmon" defaultValue={amountSalmon} placeholder="$0" onBlur={handleChangeSalmon} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
        </div>
      </div>
      {/* Alaska Gift */}
      <div className="alaska-container gift">
      <div className="gift-title">
          6 NIGHT STAY <br /> IN ALASKA
        </div>
        <div>
        <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/ALASKA.png' alt='Alaska' />
        </div>
    <div className="gift-area">
    {/* Display Alaska from the API */}
    {bears && (
      <div className="bears">
        {/* Alaska Exeperience Progress */}
        {bears.map((bear, index) => (
          <div key={index}>
          <ProgressBar value={bear.totalAlaska} max={1500}/>
            <div className="amounts-display">
              <div className="amount-given">${bear.totalAlaska}</div> 
              <div className="total-amount">$1500</div>
            </div>
          </div>
        ))}
      </div>
    )}
    {/* Submit Alaska */}
    <form id="alaska-form" onSubmit={handleSubmitAlaska}>
    <div className="gift-inputs">
    <div className="gift-name">
          <input type="text" className="light-box" name="nameAlaska" defaultValue={nameAlaska} placeholder="name" onBlur={handleChangeAlaska} />
        </div>
        <div className="amount-submit">
          <div className="gift-amount">
            <input type="number" className="light-box" name="amountAlaska" defaultValue={amountAlaska} placeholder="$0" onBlur={handleChangeAlaska} />
          </div>
          <button data-testid="button" type="submit" className="gift-submit">submit</button>
        </div>
        </div>
      </form>
      </div>
      </div>
      {/* Beer Gift */}
      <div className="beer-container gift">
          <div className="gift-title">
            KOHOLA & MAUI <br /> BREWING COMPANY BEER
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/BEER.png' alt='Glass of Beer' />
          </div>
      <div className="gift-area">
      {/* Display Beer from the API */}
      {bears && (
        <div className="bears">
          {/* Bears Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
              <ProgressBarDark value={bear.totalBeer} max={75}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalBeer}</div> 
                <div className="total-amount">$75</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Beer */}
        <form id="beer-form" onSubmit={handleSubmitBeer}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="dark-box" name="nameBeer" defaultValue={nameBeer} placeholder="name" onBlur={handleChangeBeer} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="dark-box" name="amountBeer" defaultValue={amountBeer} placeholder="$0" onBlur={handleChangeBeer} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
        </div>
      </div>
      {/* Tramway Gift */}
      <div className="tramway-container gift">
        <div className="gift-title">
            MOUNT ROBERTS <br /> TRAMWAY IN ANCHORAGE
          </div>
          <div>
            <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/TRAM.png' alt='Tram' />
          </div>
      <div className="gift-area">
      {/* Display Tram from the API */}
      {bears && (
        <div className="bears">
          {/* Tramway Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalTram} max={100}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalTram}</div> 
                <div className="total-amount">$100</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Tram */}
      <form id="tram-form" onSubmit={handleSubmitTram}>
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" className="light-box" name="nameTram" defaultValue={nameTram} placeholder="name" onBlur={handleChangeTram} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="light-box" name="amountTram" defaultValue={amountTram} placeholder="$0" onBlur={handleChangeTram} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form>
      </div>
      </div>
      {/* Snorkel Gift */}
      <div className="snorkel-container gift">
        <div className="gift-title">
            SNORKELING TOUR <br /> IN MAUI
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/SNORKLE.png' alt='Snorkeling' />
        </div>
      <div className="gift-area">
      <div className="gift-fullfilled">FULFILLED!</div>
      {/* {bears && (
        <div className="bears">
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBarDark value={bear.totalSnorkel} max={300}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalSnorkel}</div> 
                <div className="total-amount">$300</div>
              </div>
            </div>
          ))}
        </div>
      )} */}
      {/* Submit Snorkel */}
      {/* <form id="snorkel-form" onSubmit={handleSubmitSnorkel}>
      <div className="gift-inputs">
      <div className="gift-name">
            <input type="text" className="dark-box" name="nameSnorkel" defaultValue={nameSnorkel} placeholder="name" onBlur={handleChangeSnorkel} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" className="dark-box" name="amountSnorkel" defaultValue={amountSnorkel} placeholder="$0" onBlur={handleChangeSnorkel} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
          </div>
        </form> */}
      </div> 
      </div>
    </div>
    </section>
  );
}

export default GiftsForm;