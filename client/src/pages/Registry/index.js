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
      <h1>Coming Soon</h1>
      
    </section>
  );
}

export default GiftsForm;