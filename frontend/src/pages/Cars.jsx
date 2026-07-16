import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Cars.css";

const cars = [
  {
    id: 1,
    name: "BMW X5",
    type: "Luxury",
    price: 4999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900"
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    type: "Luxury",
    price: 5499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
  },
  {
    id: 3,
    name: "Audi A6",
    type: "Luxury",
    price: 5999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900"
  },
  {
    id: 4,
    name: "Hyundai Creta",
    type: "SUV",
    price: 2999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
  },
  {
    id: 5,
    name: "Mahindra XUV700",
    type: "SUV",
    price: 3499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900"
  },
  {
    id: 6,
    name: "Kia Seltos",
    type: "SUV",
    price: 3199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900"
  }
];

function Cars() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="cars-page">

      <h1>Our Premium Cars</h1>

      <input
        className="search-input"
        type="text"
        placeholder="Search your favourite car..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cars-grid">

        {filteredCars.map((car) => (

          <div className="car-box" key={car.id}>

            <img src={car.image} alt={car.name} />

            <div className="car-details">

              <h2>{car.name}</h2>

              <p>{car.type}</p>

              <h3>₹ {car.price} / Day</h3>

              <span>⭐ {car.rating}</span>

              <button
  onClick={() =>
    navigate("/booking", {
      state: { car: car.name },
    })
  }
>
  Book Now
</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Cars;