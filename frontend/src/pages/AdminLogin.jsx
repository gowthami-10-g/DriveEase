import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      admin.username === "admin" &&
      admin.password === "admin123"
    ) {
      alert("Login Successful");
      navigate("/admin");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <section className="admin-login">

      <div className="login-card">

        <h1>DriveEase Admin</h1>

        <p>Login to access Dashboard</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={admin.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={admin.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </section>
  );
}

export default AdminLogin;