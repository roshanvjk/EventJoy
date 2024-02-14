import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Pages/Css/userDash.css';
import EventDetails from './viewBook';

const UserDashboard = () => {
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user/orders');
      const orders = response.data;
      setNumberOfOrders(orders.length);

      let totalPriceSum = 0;
      orders.forEach(order => {
        totalPriceSum += order.totalPrice;
      });
      setTotalPrice(totalPriceSum);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
              <span className="links_name">Number of Orders: {numberOfOrders}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Total Price: ${totalPrice}</span>
            </a>
          </li>
          <li>
            <Link to={"/profile"}>
              <i className='bx bx-box'></i>
              <span className="links_name">Profile</span>
            </Link>
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
            <img src="images/profile.jpg" alt="Profile" />
            <span className="admin_name">User</span>
            <i className='bx bx-chevron-down'></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Your Orders</div>
                <div className="number">{numberOfOrders}</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>

            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Price</div>
                <div className="number">${totalPrice}</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bxs-cart-add cart two'></i>
            </div>
          </div>
        </div>
        <EventDetails />
      </section>
    </>
  );
};

export default UserDashboard;
