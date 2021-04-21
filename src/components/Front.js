import { Link } from "react-router-dom";
import "../stylesheets/Front.scss";
import rm1 from "../images/front/rm1.png";
import rm2 from "../images/front/rm2.png";
import rm3 from "../images/front/rm3.png";
import rm4 from "../images/front/rm4.png";
import pokemon from "../images/front/pokemon.png";
import PS1 from "../images/front/PS1.png";
import PS2 from "../images/front/PS2.png";
import PS3 from "../images/front/PS3.png";
import PS4 from "../images/front/PS4.png";
import PS5 from "../images/front/PS5.png";
import w1 from "../images/front/w1.png";
import w2 from "../images/front/w2.png";
import w3 from "../images/front/w3.png";
import w4 from "../images/front/w4.png";
import w5 from "../images/front/w5.png";
import folder from "../images/front/folder.png";
import React, { useState } from "react";

const Front = () => {
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
    <div className="front">
      <div onClick={handleChange}>
        <div class={`wrapper-menu ${middle}`} onClick={handleChange}>
          <div class={`line-menu half start ${top}`}></div>
          <div class="line-menu"></div>
          <div class={`line-menu half end ${bottom}`}></div>
        </div>
        <div className={`burger-front ${collapsable}`}>
          <Link to="/" className="link burger-front__landing">
            <span className=""> Landing </span>
          </Link>
          <Link to="/UX/" className="link burger-front__ux">
            <span className=""> UX / UI </span>
          </Link>
          <Link to="/Front/" className="link burger-front__front">
            <span className=" "> Front - end </span>
          </Link>
          <Link to="/About/" className="link burger-front__about">
            <span className=""> About me </span>
          </Link>
        </div>
      </div>
      <header className="front-header">
        <Link to="/" className="link">
          <span className="front-header__landing"> Landing </span>
        </Link>
        <Link to="/UX/" className="link">
          <span className="front-header__ux"> UX / UI </span>
        </Link>
        <Link to="/Front/" className="link">
          <span className="front-header__front"> Front - end </span>
        </Link>
        <Link to="/About/" className="link">
          <span className="front-header__about"> About me </span>
        </Link>
      </header>
      <div id="container">
        <div className="item">
        <a href="https://martcacio.github.io/waggin/#/" target="_blank" rel="noreferrer">
          <img className="content" src={folder} alt="folder waggin"/>
          <h2 className="content__title"> Waggin </h2>

          <div className="previews">
            <div className="preview-image">
            <img src={w1} alt="preview waggin 1"/>
            </div>
            <div className="preview-image">
            <img src={w2} alt="preview waggin 2"/>            
            </div>
            <div className="preview-image">
            <img src={w3} alt="preview waggin 3"/>            
            </div>
            <div className="preview-image">
            <img src={w4} alt="preview waggin 4"/>            
            </div>
            <div className="preview-image">
            <img src={w5} alt="preview waggin 5"/>            
            </div>
          </div>
          </a>
        </div> 

        <div className="item">
          <a href="https://martcacio.github.io/paquita-salas/" target="_blank" rel="noreferrer">
            <img className="content" src={folder} alt="folder paquita salas"/>
            <h2 className="content__title"> Paquita Salas </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={PS1} alt="preview paquita salas 1"/>
              </div>
              <div className="preview-image">
                <img src={PS2} alt="preview paquita salas 2"/>
              </div>
              <div className="preview-image">
                <img src={PS3} alt="preview paquita salas 3"/>
              </div>
              <div className="preview-image">
                <img src={PS4} alt="preview paquita salas 4"/>
              </div>
              <div className="preview-image">
                <img src={PS5} alt="preview paquita salas 5"/>
              </div>
            </div>
          </a>
        </div>

        <div className="item">
          <a href="https://martcacio.github.io/pokedex/" target="_blank" rel="noreferrer">
            <img className="content" src={folder} alt="folder pokedex"/>
            <h2 className="content__title"> Pokemon </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={pokemon} alt="preview pokemon"/>
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="https://martcacio.github.io/rick-and-morty/#/" target="_blank" rel="noreferrer">
            <img className="content" src={folder} alt="folder rick y morty"/>
            <h2 className="content__title"> Rick y Morty </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={rm1} alt="preview rick y morty 1"/>
              </div>
              <div className="preview-image">
                <img src={rm3} alt="preview rick y morty 2"/>
              </div>
              <div className="preview-image">
                <img src={rm4} alt="preview rick y morty 3"/>
              </div>

              <div className="preview-image">
                <img src={rm2} alt="preview rick y morty 4"/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Front;
