import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        <h1>About DriveEase</h1>

        <p className="about-text">
          DriveEase is a premium car rental platform designed to make
          travelling comfortable, affordable and hassle-free.
          We offer luxury cars, SUVs, sedans and hatchbacks with
          transparent pricing and instant booking.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To provide customers with safe, affordable and premium
              car rental services through a modern digital platform.
            </p>
          </div>

          <div className="about-card">
            <h2>👁 Our Vision</h2>
            <p>
              To become India's most trusted and customer-friendly
              car rental company by delivering quality service.
            </p>
          </div>

          <div className="about-card">
            <h2>⭐ Why Choose Us</h2>
            <ul>
              <li>Premium Cars</li>
              <li>Affordable Pricing</li>
              <li>24×7 Customer Support</li>
              <li>Instant Online Booking</li>
              <li>Secure Payment</li>
            </ul>
          </div>

        </div>

        <div className="stats">

          <div className="stat-box">
            <h2>500+</h2>
            <p>Cars Available</p>
          </div>

          <div className="stat-box">
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-box">
            <h2>25+</h2>
            <p>Cities Covered</p>
          </div>

          <div className="stat-box">
            <h2>4.9 ★</h2>
            <p>Customer Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;