import "../styles/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why">

      <h2>Why Choose DriveEase?</h2>

      <div className="why-container">

        <div className="why-card">
          <div className="icon">🚗</div>
          <h3>Premium Cars</h3>
          <p>
            Choose from luxury, SUV, sedan and hatchback
            vehicles maintained in excellent condition.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">💰</div>
          <h3>Affordable Pricing</h3>
          <p>
            Transparent pricing with no hidden charges and
            flexible rental packages.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">⚡</div>
          <h3>Instant Booking</h3>
          <p>
            Book your favorite car in just a few clicks with
            instant confirmation.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">🛡️</div>
          <h3>Safe & Secure</h3>
          <p>
            Verified vehicles, secure payment process and
            24×7 customer support.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;