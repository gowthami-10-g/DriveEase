import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">

          <h2>🚗 DriveEase</h2>

          <p>
            DriveEase provides premium car rental services
            with luxury, comfort and affordable pricing.
            Book your dream car anytime, anywhere.
          </p>

        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/about">About</Link>

        </div>

        <div className="footer-box">

          <h3>Contact</h3>

          <p>📍 Hyderabad, Telangana</p>
          <p>📞 +91 9876543210</p>
          <p>✉ driveease@gmail.com</p>

        </div>

        <div className="footer-box">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">▶</a>

          </div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 DriveEase. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;