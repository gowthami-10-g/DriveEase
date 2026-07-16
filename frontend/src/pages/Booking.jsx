import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Booking.css";
import { createBooking } from "../services/api";

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedCar = location.state?.car || "";

  const carIds = {
    "BMW X5": 1,
    "Mercedes C-Class": 2,
    "Audi A6": 3,
    "Hyundai Creta": 4,
    "Mahindra XUV700": 5,
    "Kia Seltos": 6,
  };

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    car: selectedCar,
    pickupDate: "",
    returnDate: "",
    pickupTime: "",
    payment: "",
    request: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBooking((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      new Date(booking.returnDate) <= new Date(booking.pickupDate)
    ) {
      alert("Return date must be after pickup date.");
      return;
    }

    const bookingData = {
      carId: carIds[booking.car],
      customerName: booking.name,
      email: booking.email,
      phone: booking.phone,
      pickupLocation: booking.pickupLocation,
      pickupDate: booking.pickupDate,
      returnDate: booking.returnDate,
    };

    try {
      setLoading(true);

      const savedBooking = await createBooking(bookingData);

      alert("🎉 Booking Confirmed Successfully!");

      console.log(savedBooking);

      navigate("/booking-success", {
  state: {
    booking: savedBooking,
  },
});
    } catch (err) {
      console.error(err);
      alert("Unable to save booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking">
      <div className="booking-container">
        <h1>Book Your Car</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={booking.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={booking.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={booking.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pickupLocation"
            placeholder="Pickup Location"
            value={booking.pickupLocation}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="dropLocation"
            placeholder="Drop Location"
            value={booking.dropLocation}
            onChange={handleChange}
          />

          <select
            name="car"
            value={booking.car}
            onChange={handleChange}
            required
          >
            <option value="">Select Car</option>
            <option>BMW X5</option>
            <option>Mercedes C-Class</option>
            <option>Audi A6</option>
            <option>Hyundai Creta</option>
            <option>Mahindra XUV700</option>
            <option>Kia Seltos</option>
          </select>

          <label>Pickup Date</label>

          <input
            type="date"
            name="pickupDate"
            value={booking.pickupDate}
            onChange={handleChange}
            required
          />

          <label>Return Date</label>

          <input
            type="date"
            name="returnDate"
            value={booking.returnDate}
            onChange={handleChange}
            required
          />

          <label>Pickup Time</label>

          <input
            type="time"
            name="pickupTime"
            value={booking.pickupTime}
            onChange={handleChange}
          />

          <select
            name="payment"
            value={booking.payment}
            onChange={handleChange}
          >
            <option value="">Select Payment Method</option>
            <option>Cash</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
          </select>

          <textarea
            name="request"
            rows="4"
            placeholder="Special Request"
            value={booking.request}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;