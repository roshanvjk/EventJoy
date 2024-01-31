// UserDashboard.js
import { useState } from 'react';
import '../Pages/Css/userDash.css';

const UserDashboard = () => {
  const initialOrders = [
    { id: 1, productName: 'Product 1', quantity: 2, totalPrice: '$100' },
    { id: 2, productName: 'Product 2', quantity: 1, totalPrice: '$50' },
    // Add more initial orders as needed
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [editableRow, setEditableRow] = useState(null);

  const handleEditClick = (orderId) => {
    setEditableRow(orderId);
  };

  const handleSaveClick = (orderId) => {
    // Implement your logic to save the changes
    // For simplicity, this example just logs the changes
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? {
            ...order,
            productName: document.getElementById(`productName-${orderId}`).value,
            quantity: parseInt(document.getElementById(`quantity-${orderId}`).value, 10),
            totalPrice: document.getElementById(`totalPrice-${orderId}`).value,
          }
        : order
    );
    setOrders(updatedOrders);
    setEditableRow(null);
  };

  const handleDeleteClick = (orderId) => {
    // Implement your logic to delete the order
    // For simplicity, this example just logs the deletion
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
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
              <span className="links_name">Orders</span>
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
                <div className="number">5</div>
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
                <div className="number">$5000</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bxs-cart-add cart two'></i>
            </div>
          </div>
        </div>
      {/* ... (previous code) */}

      <div className="orders-table">
        <h2>Your Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {editableRow === order.id ? (
                    <input type="text" defaultValue={order.productName} id={`productName-${order.id}`} />
                  ) : (
                    order.productName
                  )}
                </td>
                <td>
                  {editableRow === order.id ? (
                    <input type="number" defaultValue={order.quantity} id={`quantity-${order.id}`} />
                  ) : (
                    order.quantity
                  )}
                </td>
                <td>
                  {editableRow === order.id ? (
                    <input type="text" defaultValue={order.totalPrice} id={`totalPrice-${order.id}`} />
                  ) : (
                    order.totalPrice
                  )}
                </td>
                <td>
                  {editableRow === order.id ? (
                    <>
                      <button onClick={() => handleSaveClick(order.id)}>Save</button>
                      <button onClick={() => setEditableRow(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEditClick(order.id)}>Edit</button>
                      <button onClick={() => handleDeleteClick(order.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
};

export default UserDashboard;
