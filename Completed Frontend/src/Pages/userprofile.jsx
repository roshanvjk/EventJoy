import '../Pages/Css/UserProfile.css';
import { useState, useEffect } from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('Unknown');
  const [email, setEmail] = useState('unknown@example.com');
  const [mobile, setMobile] = useState('9999999999');

  useEffect(() => {
    // Fetch user data from backend when component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make API call to fetch user data from backend
      const response = await axios.get('http://localhost:8080/user/profile');
      const userData = response.data; // Assuming backend returns user data in JSON format
      setUsername(userData.username);
      setEmail(userData.email);
      setMobile(userData.mobile);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      // Make API call to update user data on the backend
      await axios.put('http://localhost:8080/user/profile', {
        username,
        email,
        mobile
      });
      console.log('Changes saved!');
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  return (
    <>
      <div className="profile">
        <div className="pimg">
          <div className="profile_container">
            <div className="profile-header">
              <h1>{username}</h1>
              <div className="underline" style={{ marginLeft: "50px", marginBottom: "0px" }}></div>
            </div>
            <div className="profile-details">
              <div className="user-info">
                <table>
                  <tbody>
                    <tr>
                      <td><h3>Username</h3></td>
                      <td>
                        <h4
                          id="username"
                          contentEditable={isEditing}
                          className={isEditing ? 'editable' : ''}
                          onBlur={(e) => setUsername(e.target.textContent)}
                        >
                          {username}
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td><h3>Email</h3></td>
                      <td>
                        <h4
                          id="email"
                          contentEditable={isEditing}
                          className={isEditing ? 'editable' : ''}
                          onBlur={(e) => setEmail(e.target.textContent)}
                        >
                          {email}
                        </h4>
                      </td>
                    </tr>
                    <tr>
                      <td><h3>Mobile Number</h3></td>
                      <td>
                        <h4
                          id="mobile"
                          contentEditable={isEditing}
                          className={isEditing ? 'editable' : ''}
                          onBlur={(e) => setMobile(e.target.textContent)}
                        >
                          {mobile}
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {isEditing ? (
                <button className="save-button" onClick={handleSaveClick}>
                  <SaveIcon />
                </button>
              ) : (
                <button className="edit-button" onClick={handleEditClick}>
                  <ModeEditOutlineIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
