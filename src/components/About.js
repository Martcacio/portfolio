import { Link } from "react-router-dom";
import "../stylesheets/About.scss";
import marta from "../images/about/marta.jpg";
import pedro from "../images/about/pedro.png";
import pausa from "../images/about/pausa.jpeg";
import cantabria from "../images/cantabria.jpg";
import grecia from "../images/about/grecia.jpg";
import React, { useState } from "react";

const About = () => {
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
    <div className="about">
      <div onClick={handleChange}>
        <div class={`wrapper-menu ${middle}`}>
          <div class={`line-menu-about half start ${top}`}></div>
          <div class="line-menu-about"></div>
          <div class={`line-menu-about half end ${bottom}`}></div>
        </div>
        <div className={`burger-about ${collapsable}`}>
          <Link to="/" className="link burger-about__landing">
            <span className=""> Landing </span>
          </Link>
          <Link to="/UX/" className="link burger-about__ux">
            <span className=""> UX / UI </span>
          </Link>
          <Link to="/Front/" className="link burger-about__front">
            <span className=" "> Front - end </span>
          </Link>
          <Link to="/About/" className="link burger-about__about">
            <span className=""> About me </span>
          </Link>
        </div>
      </div>
      <header className="about-header">
        <Link to="/" className="link">
          <span className="about-header__landing"> Landing </span>
        </Link>
        <Link to="/UX/" className="link">
          <span className="about-header__ux"> UX / UI </span>
        </Link>
        <Link to="/Front/" className="link">
          <span className="about-header__front"> Front - end </span>
        </Link>
        <Link to="/About/" className="link">
          <span className="about-header__about"> About me </span>
        </Link>
      </header>
      <main className="about-container">
        <article className="photo">
          <h1 className="title">Conóceme</h1>

          <img className="img" src={marta} alt="Marta Cano"/>
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
          <h2 className="subtitle">-un poquito mejor</h2>
        </article>

        <article className="about-container__article">
          <img className="about-container__article--photo1" src={pausa} alt="scenery"/>
          <img className="about-container__article--photo2" src={cantabria} alt="cantabria"/>
          <p className="about-container__article--paragraph">
            Soy una diseñadora UX/UI que se cansó de aclarar que solo diseñaba
            webs, por lo que ahora también las programo.
          </p>
          <p className="about-container__article--paragraph2">
            Mi vida profesional empieza al acabar la universidad, tras un
            erasmus en Grecia decidí que quería vivir en Londres, donde pude
            perfeccionar mi inglés. Al volver a España tuve varios trabajos como
            diseñadora gráfica hasta que empecé con el diseño web, donde trabajé
            un año (y empezó la pandemia mundial). Esto fue un punto de
            inflexión que me hizo reflexionar y ver que no solo quería diseñar
            webs, también programarlas
          </p>
          <img className="about-container__article--photo3" src={grecia} alt="greece"/>
        </article>
        <div className="reviews">
          <div className="reviews__pedro">
            <p className="reviews__pedro--paragraph ">
              "Marta es una diseñadora inteligente, profesional, con gran
              capacidad de adaptación y su actitud de aprender cada día hacen
              evidente su vocación.Su sólido conocimiento de UX / UI le permite
              realizar el trabajo con rapidez y calidad, tanto en equipo como de
              forma autónoma.Su personalidad divertida y positiva hace que todos
              disfruten de su presencia."
            </p>
            <div className="reviews__pedro-container">
              <img className="reviews__pedro-container--img" src={pedro} alt="Pedro"/>
              <h4 className="reviews__pedro-container--name">
                Pedro, compañero en Sngular
              </h4>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact__container-icons">
            <a href="https://www.behance.net/marcticano" className="contact__container-icons--icons" target="_blank" rel="noreferrer">
              <i class="fab fa-behance"></i>
            </a>
            <a href="https://github.com/Martcacio" className="contact__container-icons--icons" target="_blank" rel="noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/martacacio/" className="contact__container-icons--icons" target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/martcacio" className="contact__container-icons--icons" target="_blank" rel="noreferrer">
              <i class="fab fa-twitter"></i>
            </a>
          </div>

          <h3 className="contact__mail">
            <a
              href="mailto:martanchor@gmail.com"
              className="underlined2 underlined2--offset link-mail"
            >
              martanchor@gmail.com
            </a>
          </h3>
        </div>
      </main>
    </div>
  );
};

export default About;
