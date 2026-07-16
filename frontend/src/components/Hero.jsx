import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Drive Your Dream Car Today</h1>

          <p>
            Premium car rentals at affordable prices.
            Experience comfort, luxury and hassle-free booking
            with DriveEase.
          </p>

          <div className="hero-buttons">
            <Link to="/cars" className="primary-btn">
              Explore Cars
            </Link>

            <Link to="/booking" className="secondary-btn">
              Book Now
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero} alt="DriveEase Car" />
        </div>
      </div>
    </section>
  );
}

export default Hero;