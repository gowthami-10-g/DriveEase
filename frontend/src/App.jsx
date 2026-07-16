import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cars" element={<Cars />} />

        <Route path="/booking" element={<Booking />} />

        <Route
          path="/booking-success"
          element={<BookingSuccess />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;