import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import Filter from "./Filter";

import dino from "../images/dino.gif";

const App = () => {
  return (
    <>
      <img className="landing__image" src={dino} />

      <section className="landing__title">
        <h1 className="landing__title--title"> MARTA CANO</h1>
        <h2 className="landing__title--subtitle"> PORTFOLIO !==NOT FOUND</h2>
      </section>
      <section>
        <ul className="landing__knowledge">
          <li className="landing__knowledge--ux"> UX/UI Design</li>

          <li className="landing__knowledge--front">Front-End Developer</li>
        </ul>
      </section>
    </>
  );
};

export default App;
