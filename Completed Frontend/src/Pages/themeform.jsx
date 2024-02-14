import { useState } from 'react';
import '../Pages/Css/themeForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ThemeManagement() {
  const user = useSelector(selectUser);
  const [themeData, setThemeData] = useState({
    id: '',
    themeName: '',
    themeImageURL: '',
    themeDescription: '',
    themePhotographer: '',
    themeVideographer: '',
    themeReturnGift: '',
    themeCost: ''
  });
  const [isEditMode, setIsEditMode] = useState(false); // State to manage edit mode

  const handleChange = (e) => {
    const { name, value } = e.target;
    setThemeData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditMode) {
        await axios.put(`http://localhost:8080/admin/update-theme`, themeData);
      } else {
        await axios.post("http://localhost:8080/admin/add-theme/" + user.email, themeData);
      }
      console.log('Theme submitted successfully!');
      // Reset form after submission
      setThemeData({
        id: '',
        themeName: '',
        themeImageURL: '',
        themeDescription: '',
        themePhotographer: '',
        themeVideographer: '',
        themeReturnGift: '',
        themeCost: ''
      });
      toast.success('Theme submitted successfully!');
    } catch (error) {
      console.error('Error submitting theme:', error);
      toast.error('Error submitting theme: ' + error.message);
    }
  };

  const handleToggleEditMode = () => {
    setIsEditMode(!isEditMode); // Toggle edit mode
  };

  const handleFetchDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/admin/get-theme/${themeData.id}`);
      // Update themeData state with fetched details
      setThemeData(response.data);
    } catch (error) {
      console.error('Error fetching theme details:', error);
      toast.error('Cannot Find The Details in This ID');
    }
  };

  return (
    <>
      <div className="theme-form-container">
        <form onSubmit={handleSubmit}>
          {isEditMode && (
            <div className="form-group">
              <label htmlFor="id">Theme ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={themeData.id}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="themeName">Theme Name:</label>
            <input
              type="text"
              id="themeName"
              name="themeName"
              value={themeData.themeName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="themeImageURL">Theme Image URL:</label>
            <input
              type="text"
              id="themeImageURL"
              name="themeImageURL"
              value={themeData.themeImageURL}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="themeDescription">Theme Description:</label>
            <textarea
              id="themeDescription"
              name="themeDescription"
              value={themeData.themeDescription}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="themePhotographer">Theme Photographer:</label>
            <input
              type="text"
              id="themePhotographer"
              name="themePhotographer"
              value={themeData.themePhotographer}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="themeVideographer">Theme Videographer:</label>
            <input
              type="text"
              id="themeVideographer"
              name="themeVideographer"
              value={themeData.themeVideographer}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="themeReturnGift">Theme Return Gift:</label>
            <input
              type="text"
              id="themeReturnGift"
              name="themeReturnGift"
              value={themeData.themeReturnGift}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="themeCost">Theme Cost:</label>
            <input
              type="text"
              id="themeCost"
              name="themeCost"
              value={themeData.themeCost}
              onChange={handleChange}
            />
          </div>
          <div className="buttons-container">
            <button type="submit" className="button">{isEditMode ? 'Edit' : 'Add'} Theme</button>
            <button type="button" className="button" onClick={handleToggleEditMode}>{isEditMode ? 'Cancel Edit' : 'Edit Theme'}</button>
            <button type="button" className="button" onClick={handleFetchDetails}>Fetch Details</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default ThemeManagement;
