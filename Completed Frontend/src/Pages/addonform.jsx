import { useState } from 'react';
import '../Pages/Css/addonForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function AddonForm() {
  const user = useSelector(selectUser);
  const [addonData, setAddonData] = useState({
    addonId: '',
    addonName: '',
    addonImageURL: '',
    addonDescription: '',
    addonPrice: ''
  });
  const [isEditMode, setIsEditMode] = useState(false); // State to manage edit mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddonData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(addonData);
    const response = await axios.post("http://localhost:8080/admin/add-addons/" + user.email, addonData);
    console.log(response);
  };

  const handleFetchDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/admin/get-addon/${addonData.addonId}`);
      setAddonData(response.data);
    } catch (error) {
      console.error('Error fetching addon details:', error);
    }
  };

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <>
      <div className="addon-form-container">
        <form onSubmit={handleSubmit}>
          {isEditMode && (
            <div className="form-group">
              <label htmlFor="addonId">Addon ID:</label>
              <input
                type="text"
                id="addonId"
                name="addonId"
                value={addonData.addonId}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="addonName">Addon Name:</label>
            <input
              type="text"
              id="addonName"
              name="addonName"
              value={addonData.addonName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addonImageURL">Addon Image URL:</label>
            <input
              type="text"
              id="addonImageURL"
              name="addonImageURL"
              value={addonData.addonImageURL}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addonDescription">Addon Description:</label>
            <textarea
              id="addonDescription"
              name="addonDescription"
              value={addonData.addonDescription}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="addonPrice">Addon Price:</label>
            <input
              type="text"
              id="addonPrice"
              name="addonPrice"
              value={addonData.addonPrice}
              onChange={handleChange}
            />
          </div>
          <div className="buttons-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleToggleEditMode}>
              {isEditMode ? 'Cancel Edit' : 'Edit'}
            </button>
            {isEditMode && (
              <button type="button" onClick={handleFetchDetails}>Fetch Details</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default AddonForm;
