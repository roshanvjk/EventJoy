// import React from 'react';
import '../Pages/Css/admin.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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
            <Link to={"/addProducts"}>
              <i className='bx bx-box'></i>
              <span className="links_name">Add Product</span>
            </Link>
          </li>
          <li>
            <Link to={"/userEntry"}>
              <i className='bx bx-list-ul'></i>
              <span className="links_name">User Enteries</span>
            </Link>
          </li>
          <li>
          <Link to={"/deleteEvents"}>
              <i className='bx bx-pie-chart-alt-2' ></i>
              <span className="links_name">Delete Event</span>
            </Link>
          </li>
          <li>
            <Link to ={"/updateEvent"}>
              <i className='bx bx-coin-stack' ></i>
              <span className="links_name">Update Event</span>
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
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className='bx bx-search'></i>
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
                <div className="box-topic">Total Order</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>

            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Sales</div>
                <div className="number">38,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bxs-cart-add cart two'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Profit</div>
                <div className="number">$12,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart cart three'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">11,086</div>
                <div className="indicator">
                  <i className='bx bx-down-arrow-alt down'></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className='bx bxs-cart-download cart four'></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li><a href="#">Alex Doe</a></li>
                  <li><a href="#">David Mart</a></li>
                  <li><a href="#">Roe Parter</a></li>
                  <li><a href="#">Diana Penty</a></li>
                  <li><a href="#">Martin Paw</a></li>
                  <li><a href="#">Doe Alex</a></li>
                  <li><a href="#">Aiana Lexa</a></li>
                  <li><a href="#">Rexel Mags</a></li>
                  <li><a href="#">Tiana Loths</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">Sales</li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Cancelled</a></li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Delivered</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li><a href="#">$204.98</a></li>
                  <li><a href="#">$24.55</a></li>
                  <li><a href="#">$25.88</a></li>
                  <li><a href="#">$170.66</a></li>
                  <li><a href="#">$56.56</a></li>
                  <li><a href="#">$44.95</a></li>
                  <li><a href="#">$67.33</a></li>
                  <li><a href="#">$23.53</a></li>
                  <li><a href="#">$46.52</a></li>
                </ul>
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
