import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Detail from "./pages/Detail";
import Rsvp from "./pages/Rsvp";
import Home from "./pages/Home"
import Story from "./pages/Story"
import Nav from "./components/Nav";
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
