import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rsvp from "./pages/Rsvp";
import Home from "./pages/Home"
import Story from "./pages/Story"
import Adventure from "./pages/Adventure"
import Travel from "./pages/Travel"
import Lodging from "./pages/Lodging"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rsvp" component={Rsvp} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/lodging" component={Lodging} />
          <Route exact path="/travel" component={Travel} />
          <Route exact path="/adventure" component={Adventure} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
