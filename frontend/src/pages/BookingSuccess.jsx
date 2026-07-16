import { Link, useLocation, Navigate } from "react-router-dom";
import "../styles/BookingSuccess.css";

function BookingSuccess() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Booking Confirmed!</h1>

        <p className="success-message">
          Thank you for choosing <strong>DriveEase</strong>.
          Your booking has been created successfully.
        </p>

        <div className="booking-details">
          <div className="detail">
            <span>Booking ID</span>
            <strong>{booking.id}</strong>
          </div>

          <div className="detail">
            <span>Customer</span>
            <strong>{booking.customerName}</strong>
          </div>

          <div className="detail">
            <span>Car</span>
            <strong>{booking.carName}</strong>
          </div>

          <div className="detail">
            <span>Pickup</span>
            <strong>{booking.pickupLocation}</strong>
          </div>

          <div className="detail">
            <span>Pickup Date</span>
            <strong>{booking.pickupDate}</strong>
          </div>

          <div className="detail">
            <span>Return Date</span>
            <strong>{booking.returnDate}</strong>
          </div>

          <div className="detail">
            <span>Rental Days</span>
            <strong>{booking.rentalDays}</strong>
          </div>

          <div className="detail">
            <span>Total Price</span>
            <strong>₹ {booking.totalPrice}</strong>
          </div>

          <div className="detail">
            <span>Status</span>
            <strong className="status">
              {booking.status}
            </strong>
          </div>
        </div>

        <div className="button-group">
          <Link to="/" className="home-btn">
            Back to Home
          </Link>

          <Link to="/cars" className="cars-btn">
            Book Another Car
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingSuccess;