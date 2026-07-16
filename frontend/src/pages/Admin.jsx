import "../styles/Admin.css";

function Admin() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>🚗 DriveEase</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>🚘 Cars</li>
          <li>📅 Bookings</li>
          <li>👥 Customers</li>
          <li>⚙ Settings</li>
          <li>🚪 Logout</li>
        </ul>

      </aside>

      <main className="dashboard-content">

        <h1>Admin Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>120</h2>
            <p>Total Cars</p>
          </div>

          <div className="card">
            <h2>350</h2>
            <p>Total Bookings</p>
          </div>

          <div className="card">
            <h2>285</h2>
            <p>Customers</p>
          </div>

          <div className="card">
            <h2>₹12.5L</h2>
            <p>Revenue</p>
          </div>

        </div>

        <div className="table-section">

          <h2>Recent Bookings</h2>

          <table>

            <thead>
              <tr>
                <th>Customer</th>
                <th>Car</th>
                <th>Pickup</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rahul</td>
                <td>BMW X5</td>
                <td>20 Jul</td>
                <td className="active">Confirmed</td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Audi A6</td>
                <td>22 Jul</td>
                <td className="pending">Pending</td>
              </tr>

              <tr>
                <td>Arjun</td>
                <td>Mercedes</td>
                <td>24 Jul</td>
                <td className="active">Confirmed</td>
              </tr>

              <tr>
                <td>Sneha</td>
                <td>Kia Seltos</td>
                <td>25 Jul</td>
                <td className="pending">Pending</td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Admin;