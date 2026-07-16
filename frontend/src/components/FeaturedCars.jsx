import { useNavigate } from "react-router-dom";
import "../styles/FeaturedCars.css";

const cars = [
  {
    id: 1,
    name: "BMW X5",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
    price: "₹4,999 / Day",
    rating: "4.9"
  },
  {
    id: 2,
    name: "Mercedes C-Class",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    price: "₹5,499 / Day",
    rating: "4.8"
  },
  {
    id: 3,
    name: "Audi A6",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800",
    price: "₹5,999 / Day",
    rating: "4.9"
  },
  {
    id: 4,
    name: "Hyundai Creta",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    price: "₹2,999 / Day",
    rating: "4.7"
  },
  {
    id: 5,
    name: "Mahindra XUV700",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",
    price: "₹3,499 / Day",
    rating: "4.8"
  },
  {
    id: 6,
    name: "Kia Seltos",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",
    price: "₹3,199 / Day",
    rating: "4.6"
  }
];

function FeaturedCars() {

  const navigate = useNavigate();

  return (
    <section className="featured">

      <h2>Featured Cars</h2>

      <div className="car-grid">

        {cars.map((car) => (

          <div className="car-card" key={car.id}>

            <img src={car.image} alt={car.name} />

            <div className="car-info">

              <h3>{car.name}</h3>

              <p>{car.price}</p>

              <span>⭐ {car.rating}</span>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: { car: car.name }
                  })
                }
              >
                Rent Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedCars;