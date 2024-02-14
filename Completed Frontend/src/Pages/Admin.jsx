import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Pages/Css/admin.css';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/admin/get-all-orders");
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Function to calculate the number of pending orders
  const countPendingOrders = () => {
    return orders.filter(order => order.status === 'pending').length;
  };

  // Function to calculate the number of completed orders
  const countCompletedOrders = () => {
    return orders.filter(order => order.status === 'completed').length;
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">EventJoy</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <Link to={"/themeform"}>
              <i className='bx bx-box'></i>
              <span className="links_name">Themes</span>
            </Link>
          </li>
          <li>
            <Link to={"/addonform"}>
              <i className='bx bx-box'></i>
              <span className="links_name">Addon</span>
            </Link>
          </li>
          <li className="log_out">
            <a href="#">
              <i className='bx bx-log-out'></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="profile-details">
            <img src="images/profile.jpg" alt="" />
            <span className="admin_name">Admin</span>
            <i className='bx bx-chevron-down'></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Number of Orders</div>
                <div className="number">{orders.length}</div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>

            <div className="box">
              <div className="right-side">
                <div className="box-topic">Pending Orders</div>
                <div className="number">{countPendingOrders()}</div>
              </div>
              <i className='bx bx-cart cart two'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Completed Orders</div>
                <div className="number">{countCompletedOrders()}</div>
              </div>
              <i className='bx bx-cart cart three'></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                {/* Display recent sales details here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
