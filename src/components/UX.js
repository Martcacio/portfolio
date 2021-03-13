import { Link } from "react-router-dom";
import "../stylesheets/UX.scss";
import mu from "../images/ux/portada-mu.png";
import mugif from "../images/ux/mu-unscreen.gif";
import asos from "../images/ux/portada-asos.png";
import waggin from "../images/ux/portada-waggin.png";
import waggingif from "../images/ux/waggin-unscreen.gif";

const UX = () => {
  return (
    <div className="ux">
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
        <a
          href="https://www.behance.net/gallery/107876867/Waggin-Adopta-a-tu-mascota-ideal"
          target="_blank"
        >
          <section className="ux-container__1">
            <img className="ux-container__1--image" src={waggin} />
            <img className="ux-container__1--gif" src={waggingif} />
          </section>
        </a>
        <a
          href="https://www.behance.net/gallery/107876947/Asos-redesign"
          target="_blank"
        >
          <section className="ux-container__2">
            <img className="ux-container__2--image" src={asos} />
          </section>
        </a>
        <a
          href="https://www.behance.net/gallery/106852865/Landing-page"
          target="_blank"
        >
          <section className="ux-container__3">
            <img className="ux-container__3--image" src={mu} />
            <img className="ux-container__3--gif" src={mugif} />
          </section>
        </a>
      </div>
    </div>
  );
};

export default UX;
