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
import s1 from "../images/front/s1.png";
import s2 from "../images/front/s2.png";
import s3 from "../images/front/s3.png";
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
        {/*      <div className="item">
          <img className="content" src={folder} />
          <h2 className="content__title"> Waggin </h2>

          <div className="previews">
            <div className="preview-image">
              <img src="https://cdn.mos.cms.futurecdn.net/raYa9qNMVG8wDY4L3qp9c8.jpg" />
            </div>
            <div className="preview-image">
              <img src="https://www.popphoto.com/sites/popphoto.com/files/styles/1000_1x_/public/images/2018/07/00-otherworldly-national-park.jpg?itok=1bxhktRC&fc=50,50" />
            </div>
            <div className="preview-image">
              <img src="https://www.adorama.com/alc/wp-content/uploads/2016/07/americanwest-mezz-1024x576.jpg" />
            </div>
            <div className="preview-image">
              <img src="https://www.nationalgeographic.com/content/dam/photography/photos/000/675/67547.ngsversion.1467941445762.adapt.1900.1.jpg" />
            </div>
            <div className="preview-image">
              <img src="https://media.redadn.es/imagenes/pokemon-escudo-nintendo-switch_333700.jpg" />
            </div>
          </div>
        </div> */}

        <div className="item">
          <a href="https://martcacio.github.io/paquita-salas/" target="_blank">
            <img className="content" src={folder} />
            <h2 className="content__title"> Paquita Salas </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={PS1} />
              </div>
              <div className="preview-image">
                <img src={PS2} />
              </div>
              <div className="preview-image">
                <img src={PS3} />
              </div>
              <div className="preview-image">
                <img src={PS4} />
              </div>
              <div className="preview-image">
                <img src={PS5} />
              </div>
            </div>
          </a>
        </div>

        <div className="item">
          <a href="https://martcacio.github.io/pokedex/" target="_blank">
            <img className="content" src={folder} />
            <h2 className="content__title"> Pokemon </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={pokemon} />
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a
            href="https://martcacio.github.io/rick-and-morty/#/"
            target="_blank"
          >
            <img className="content" src={folder} />
            <h2 className="content__title"> Rick y Morty </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={rm1} />
              </div>
              <div className="preview-image">
                <img src={rm3} />
              </div>
              <div className="preview-image">
                <img src={rm4} />
              </div>

              <div className="preview-image">
                <img src={rm2} />
              </div>
            </div>
          </a>
        </div>
        <div className="item">
          <a
            href="http://beta.adalab.es/modulo-2-evaluacion-final-Martcacio/"
            target="_blank"
          >
            <img className="content" src={folder} />
            <h2 className="content__title"> Series </h2>

            <div className="previews">
              <div className="preview-image">
                <img src={s1} />
              </div>
              <div className="preview-image">
                <img src={s2} />
              </div>
              <div className="preview-image">
                <img src={s3} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Front;
