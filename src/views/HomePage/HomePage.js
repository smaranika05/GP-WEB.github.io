import React, { Component } from "react";
//import { HashLink as Link } from "react-router-hash-link";
import ScrollItem from "./../opacity/index";
import docroom from "./../../assets/img/header-bg.jpg";
import docteam from "./../../assets/img/Doc_team.png";
import doctor from "./../../assets/img/individual_pic.jpg";

import vector from "./../../assets/img/Vector.png";
import Team from "./../../views/Teams/team";
import Home from "./../../views/HomePage/HomePage";
import About from "./../../views/About/about";
import Pteam from "./../../views/praxiteam/pteam";

import { Container } from "@material-ui/core";
import Gallery from "./../gallery/Gallery";
import Time from "./../../views/Time/time";
import Root from "./../../views/Root/Root";
import Doctor from "./../../views/Doctor/doctor";

import Service from "./../../views/Service/service";
import Contact from "./../../views/address/Address";
//import { Route, Link } from "react-router-dom";
import "./Main.scss";
// import Header from "./components/header/header";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";
class App extends Component {
  render() {
    return (
      <div className="gp">
        <div className="root" id="root">
          <Root />
        </div>
        <div className="prax" id="praxisteam">
          <h1>Das Praxisteam</h1>
          <Pteam />
        </div>

        <div className="time" id="timing">
          <h1>Sprechzeiten</h1>
          <Time />
        </div>

        <div className="doct">
          <h1>Dr. med. Ottmar Dettner</h1>
          <Doctor />
        </div>
        <div className="gallery">
          <h1>Praxisräumlichkeiten</h1>
          <br></br>
          <Gallery />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
