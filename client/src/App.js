import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Detail from "./pages/Detail";
import Rsvp from "./pages/Rsvp";
import Home from "./pages/Home"
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rsvp" component={Rsvp} />
          <Route exact path="/books/:id">
            {/* <Detail /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
