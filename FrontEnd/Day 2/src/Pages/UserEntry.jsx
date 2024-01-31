import { useState } from 'react';
import '../Pages/Css/userentry.css';
import { Link } from 'react-router-dom';

const UserEntries = () => {
  // Assuming a static list of user entries
  const [userEntries, setUserEntries] = useState([
    { id: 1, userName: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, userName: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, userName: 'Bob Johnson', email: 'bob.johnson@example.com' },
  ]);

  const [newUser, setNewUser] = useState({ userName: '', email: '' });

  const handleAddUser = () => {
    if (newUser.userName && newUser.email) {
      setUserEntries([...userEntries, { id: userEntries.length + 1, ...newUser }]);
      setNewUser({ userName: '', email: '' });
    }
  };

  return (
    <>
      <div className="user-entries-container">
        <div className="header">
          <h2>User Entries</h2>
          <Link to="/dash" className="back-link">
            <i className='bx bx-arrow-back'></i> Back to Dashboard
          </Link>
        </div>

        <div className="user-entries-list">
          {userEntries.map((entry) => (
            <div key={entry.id} className="entry-card">
              <h3>{entry.userName}</h3>
              <p>Email: {entry.email}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>

        <div className="add-user-form">
          <h3>Add New User</h3>
          <input
            type="text"
            placeholder="User Name"
            value={newUser.userName}
            onChange={(e) => setNewUser({ ...newUser, userName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      </div>
    </>
  );
};

export default UserEntries;
