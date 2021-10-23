import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rsvp from "./pages/Rsvp";
import Registry from "./pages/Registry/index";
import Home from "./pages/Home"
import Story from "./pages/Story"
import Adventure from "./pages/Adventure"
import Travel from "./pages/Travel/index"
import Lodging from "./pages/Lodging/index"
import Updates from "./pages/Register"
import Details from "./pages/Details/index"
import Schedule from "./pages/Schedule/index"
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import 'font-awesome/css/font-awesome.min.css';
import SideDrawer from "./components/SideDrawer";
import BackDrop from "./components/BackDrop";

class App extends React.Component {
  
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };


  render() {
    
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
    <Router>
      <div>
        <Nav drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rsvp" component={Rsvp} />
          <Route exact path="/story" component={Story} />
          <Route exact path="/lodging" component={Lodging} />
          <Route exact path="/travel" component={Travel} />
          <Route exact path="/adventure" component={Adventure} />
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/register-for-updates" component={Updates} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
}

export default App;
