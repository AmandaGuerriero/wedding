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
      setBears(data) ;
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
    window.alert("Thank you," + name + "!")
    window.location.href = "/registry"
  }


  return (
    <section>
      {/* <h1>Coming Soon</h1> */}
      <div className="gifts-container">
      {/* Kayak Gift */}
      <div className="kayak-container gift">
        <div className="gift-title">
            FJORD KAYAKING <br /> TOUR IN SEWARD
        </div>
        <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/KAYAK.png' alt='Kayak' />
        </div>
      <div className="gift-area">
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
        <div className="gift-inputs">
          <div className="gift-name">
            <input type="text" name="nameKayak" defaultValue={nameKayak} placeholder="name" onBlur={handleChangeKayak} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountKayak" defaultValue={amountKayak} placeholder="$0.00" onBlur={handleChangeKayak} />
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
      {/* Display Poke from the API */}
      {bears && (
        <div className="bears">
          {/* Poke Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalPoke} max={125}/>
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
      <div className="gift-name">
            <input type="text" name="namePoke" defaultValue={namePoke} placeholder="name" onBlur={handleChangePoke} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountPoke" defaultValue={amountPoke} placeholder="$0.00" onBlur={handleChangePoke} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Tracy Arm Gift */}
      <div className="tracy-container gift">
        <div className="gift-title">
            TRACY ARM FJORD <br /> TOUR IN JUNEAU
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/KAYAK.png' alt='Boat' />
          </div>
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
      <div className="gift-name">
            <input type="text" name="nameTracy" defaultValue={nameTracy} placeholder="name" onBlur={handleChangeTracy} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountTracy" defaultValue={amountTracy} placeholder="$0.00" onBlur={handleChangeTracy} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Mamas Gift */}
      <div className="mamas-container gift">
        <div className="gift-title">
            DINNER AT MAMA'S <br /> FISH HOUSE IN MAUI
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/MAMAS.png' alt='Plate' />
          </div>
      {/* Display Mamas from the API */}
      {bears && (
        <div className="bears">
          {/* Mamas Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalMamas} max={400}/>
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
      <div className="gift-name">
            <input type="text" name="nameMamas" defaultValue={nameMamas} placeholder="name" onBlur={handleChangeMamas} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountMamas" defaultValue={amountMamas} placeholder="$0.00" onBlur={handleChangeMamas} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Hawaii Gift */}
      <div className="hawaii-container gift">
        <div className="gift-title">
            DINNER AT MAMA'S <br /> FISH HOUSE IN MAUI
        </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/HAWAII.png' alt='Hawaii' />
          </div>
      {/* Display Hawaii from the API */}
      {bears && (
        <div className="bears">
          {/* Hawaii Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalHawaii} max={3000}/>
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
      <div className="gift-name">
            <input type="text" name="nameHawaii" defaultValue={nameHawaii} placeholder="name" onBlur={handleChangeHawaii} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountHawaii" defaultValue={amountHawaii} placeholder="$0.00" onBlur={handleChangeHawaii} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Bears Gift */}
      <div className="bear-container gift">
          <div className="gift-title">
            GRIZZLY BEAR VIEWING <br /> EXCURSION IN ANCHORAGE
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
      {/* Wailea Gift */}
      <div className="wailea-container gift">
        <div className="gift-title">
            DINNER AT HOTEL <br /> WAILEA IN MAUI
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/MAMAS.png' alt='Plate' />
          </div>
      {/* Display Wailea from the API */}
      {bears && (
        <div className="bears">
          {/* Wailea Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalWailea} max={300}/>
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
      <div className="gift-name">
            <input type="text" name="nameWailea" defaultValue={nameWailea} placeholder="name" onBlur={handleChangeWailea} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountWailea" defaultValue={amountWailea} placeholder="$0.00" onBlur={handleChangeWailea} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Salmon Gift */}
      <div className="salmon-container gift">
        <div className="gift-title">
            EATING ALL THE <br /> SALMON ALASKA HAS
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/SALMON.png' alt='Salmon' />
          </div>
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
      <div className="gift-name">
            <input type="text" name="nameSalmon" defaultValue={nameSalmon} placeholder="name" onBlur={handleChangeSalmon} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountSalmon" defaultValue={amountSalmon} placeholder="$0.00" onBlur={handleChangeSalmon} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Alaska Gift */}
      <div className="alaska-container gift">
      <div className="gift-title">
          6 NIGHT STATY <br /> IN ALASKA
        </div>
        <div>
        <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/ALASKA.png' alt='Alaska' />
        </div>
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
    <div className="gift-name">
          <input type="text" name="nameAlaska" defaultValue={nameAlaska} placeholder="name" onBlur={handleChangeAlaska} />
        </div>
        <div className="amount-submit">
          <div className="gift-amount">
            <input type="number" name="amountAlaska" defaultValue={amountAlaska} placeholder="$0.00" onBlur={handleChangeAlaska} />
          </div>
          <button data-testid="button" type="submit" className="gift-submit">submit</button>
        </div>
      </form>
      </div>
      {/* Beer Gift */}
      <div className="beer-container gift">
          <div className="gift-title">
            KOHOLA & MAUI <br /> BREWING COMPANY BEER
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/BEER.png' alt='Glass of Beer' />
          </div>
      {/* Display Beer from the API */}
      {bears && (
        <div className="bears">
          {/* Bears Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
              <ProgressBar value={bear.totalBeer} max={75}/>
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
          <div className="gift-name">
            <input type="text" name="nameBeer" defaultValue={nameBeer} placeholder="name" onBlur={handleChangeBeer} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountBeer" defaultValue={amountBeer} placeholder="$0.00" onBlur={handleChangeBeer} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Tramway Gift */}
      <div className="tram-container gift">
        <div className="gift-title">
            MOUNT ROBERTS <br /> TRAMWAY IN ANCHORAGE
          </div>
          <div>
            <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/TRAM.png' alt='Tram' />
          </div>
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
      <div className="gift-name">
            <input type="text" name="nameTram" defaultValue={nameTram} placeholder="name" onBlur={handleChangeTram} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountTram" defaultValue={amountTram} placeholder="$0.00" onBlur={handleChangeTram} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* Snorkel Gift */}
      <div className="snorkel-container gift">
        <div className="gift-title">
            SNORKELING TOUR <br /> IN MAUI
          </div>
          <div>
          <img className="gift-icon" src='https://res.cloudinary.com/amandaeric/image/upload/f_auto/registry/SNORKEL.png' alt='Snorkeling' />
        </div>
      {/* Display Snorkel from the API */}
      {bears && (
        <div className="bears">
          {/* Snorkel Exeperience Progress */}
          {bears.map((bear, index) => (
            <div key={index}>
            <ProgressBar value={bear.totalSnorkel} max={300}/>
              <div className="amounts-display">
                <div className="amount-given">${bear.totalSnorkel}</div> 
                <div className="total-amount">$300</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Submit Snorkel */}
      <form id="snorkel-form" onSubmit={handleSubmitSnorkel}>
      <div className="gift-name">
            <input type="text" name="nameSnorkel" defaultValue={nameSnorkel} placeholder="name" onBlur={handleChangeSnorkel} />
          </div>
          <div className="amount-submit">
            <div className="gift-amount">
              <input type="number" name="amountSnorkel" defaultValue={amountSnorkel} placeholder="$0.00" onBlur={handleChangeSnorkel} />
            </div>
            <button data-testid="button" type="submit" className="gift-submit">submit</button>
          </div>
        </form>
      </div>
      {/* DONATIONS */}
      <div className="donation-container">
      {/* Hawaii Gift */}
      <div className="snorkel-container gift">
        <div className="gift-title">
            AMANDA & ERIC <br /> ARE DONATING <br /> XX Amount
          </div>
      {/* Display Hawaii Donations from API */}
      {bears && (
        <div className="bears">
          {bears.map((bear, index) => (
            <div key={index}>
            <div>{Math.round((bear.fullAlaska) * .0716)}</div>
            </div>
          ))}
        </div>
      )}
        </div>
      </div>
    </div>
    </section>
  );
}

export default GiftsForm;