import { useState } from "react";
import "../styles/Search.css";

function Search() {
  const [location, setLocation] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    alert(
      `Searching Cars\n\nLocation: ${location}\nPickup: ${pickup}\nDropoff: ${dropoff}`
    );
  };

  return (
    <section className="search-section">

      <h2>Find Your Perfect Ride</h2>

      <form className="search-box" onSubmit={handleSearch}>

        <div className="input-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Pickup Date</label>
          <input
            type="date"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Return Date</label>
          <input
            type="date"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </div>

        <button type="submit">
          Search Cars
        </button>

      </form>

    </section>
  );
}

export default Search;