import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Front from "./Front";
import UX from "./UX";
import About from "./About";
import dinogif from "../images/dino-unscreen.gif";
import dino from "../images/fondo-dino1.png";
import "../stylesheets/App.scss";

const App = () => {
  const renderLanding = (props) => {
    return (
      <>
        <figure className="background__dino">
          <a href="#">
            <img src={dino} alt="background-dino" />
          </a>
        </figure>
        <img className="background__dino--gif" src={dinogif} alt="gif-dino" />
        <section className="landing__title">
          <h1 className="landing__title--title"> MARTA CANO </h1>
          <h2 className="landing__title--subtitle">PORTFOLIO !== NOT FOUND</h2>
        </section>
        <section>
          <ul className="landing__knowledge">
            <Link className="link" to="/UX/">
              <li className="landing__knowledge--ux"> UX / UI Design </li>
            </Link>
            <Link className="link" to="/Front/">
              <li className="landing__knowledge--front">
                Front - End Developer
              </li>
            </Link>
          </ul>
        </section>
      </>
    );
  };

  const renderUX = (props) => {
    return <UX />;
  };

  const renderFront = (props) => {
    return <Front />;
  };

  const renderAbout = (props) => {
    return <About />;
  };

  return (
    <Switch>
      <Route exact path="/" component={renderLanding} />{" "}
      <Route path="/UX/" render={renderUX} />{" "}
      <Route path="/Front/" render={renderFront} />{" "}
      <Route path="/About/" render={renderAbout} />{" "}
    </Switch>
  );
};

export default App;
