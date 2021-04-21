import { Link } from "react-router-dom";
import "../stylesheets/UX.scss";
import mu from "../images/ux/portada-mu.png";
import mugif from "../images/ux/mu-unscreen.gif";
import asos from "../images/ux/portada-asos.png";
import waggin from "../images/ux/portada-waggin.png";
import waggingif from "../images/ux/waggin-unscreen.gif";
import React, { useState } from "react";

const UX = () => {
  const [top, setTop] = useState("");
  const [middle, setMiddle] = useState("");
  const [bottom, setBottom] = useState("");
  const [collapsable, setCollapsable] = useState("close");
  const handleChange = () => {
    !top ? setTop("top") : setTop("");
    !bottom ? setBottom("bottom") : setBottom("");
    !middle ? setMiddle("middle") : setMiddle("");
    !collapsable ? setCollapsable("close") : setCollapsable("");
  };

  return (
    <div className="ux">
      <div onClick={handleChange}>
        <div className={`wrapper-menu ${middle}`}>
          <div className={`line-menu half start ${top}`}></div>
          <div className="line-menu"></div>
          <div className={`line-menu half end ${bottom}`}></div>
        </div>
        <div className={`burger ${collapsable}`}>
          <Link to="/" className="link burger__landing">
            <span className=""> Landing </span>
          </Link>
          <Link to="/UX/" className="link burger__ux">
            <span className=""> UX / UI </span>
          </Link>
          <Link to="/Front/" className="link burger__front">
            <span className=" "> Front - end </span>
          </Link>
          <Link to="/About/" className="link burger__about">
            <span className=""> About me </span>
          </Link>
        </div>
      </div>
      <header className="ux-header">
        <Link to="/" className="link">
          <span className="ux-header__landing"> Landing </span>
        </Link>
        <Link to="/UX/" className="link">
          <span className="ux-header__ux"> UX / UI </span>
        </Link>
        <Link to="/Front/" className="link">
          <span className="ux-header__front"> Front - end </span>
        </Link>
        <Link to="/About/" className="link">
          <span className="ux-header__about"> About me </span>
        </Link>
      </header>
      <div className="ux-container">
        <a href="https://www.behance.net/gallery/107876867/Waggin-Adopta-a-tu-mascota-ideal" target="_blank" rel="noreferrer">
          <section className="ux-container__1">
            <img className="ux-container__1--image" src={waggin} alt="preview waggin"/>
            <img className="ux-container__1--gif" src={waggingif} alt="preview waggin mobile"/>
          </section>
        </a>
        <a href="https://www.behance.net/gallery/107876947/Asos-redesign" target="_blank" rel="noreferrer">
          <section className="ux-container__2">
            <img className="ux-container__2--image" src={asos} alt="preview asos redesign"/>
          </section>
        </a>
        <a href="https://www.behance.net/gallery/106852865/Landing-page" target="_blank" rel="noreferrer">
          <section className="ux-container__3">
            <img className="ux-container__3--image" src={mu} alt="preview mu"/>
            <img className="ux-container__3--gif" src={mugif} alt="preview mu mobile"/>
          </section>
        </a>
      </div>
    </div>
  );
};

export default UX;
