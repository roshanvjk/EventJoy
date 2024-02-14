import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../Pages/Css/Addons.css'; // Import CSS file for styling

function AddonListPage() {
  const [addons, setAddons] = useState([]);

  const fetchAddons = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/get-all-addons");
      setAddons(response.data);
    } catch (error) {
      console.error('Error fetching addons:', error);
    }
  };

  useEffect(() => {
    fetchAddons();
  }, []);

  return (
    <div className="addon-list-page">
      <h1>Addons List</h1>
      <Link to="/home">Back to Dashboard</Link> {/* Link to navigate back to the dashboard */}
      <ul>
        {addons.map((addon, index) => (
          <li key={index} className="addon-item">
            <img className="addon-image" src={addon.addonImageURL} alt="Addon" />
            <div className="addon-details">
              <p className="addon-name"><strong>{addon.addonName}</strong></p>
              <p className="addon-description">Description: {addon.addonDescription}</p>
              <p className="addon-price">Price: {addon.addonPrice}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddonListPage;
