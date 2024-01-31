import { useState } from 'react';
import '../Pages/Css/addProducts.css'; // Adjust the path to your CSS file
import { Link } from 'react-router-dom';

const AddProducts = () => {

  const [newEvent, setNewEvent] = useState({ name: '', date: '' });
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-03-15' },
    { id: 2, name: 'Event 2', date: '2024-04-20' },
    { id: 3, name: 'Event 3', date: '2024-05-25' },
    // Add more events as needed
  ]);

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.date) {
      setEvents([...events, { id: events.length + 1, ...newEvent }]);
      setNewEvent({ name: '', date: '' });
    }
  };

  return (
    <>
      <div className="add-products-container">
        <div className="header">
          <h2>Events</h2>
          <Link to="/dash" className="back-link">
            <i className='bx bx-arrow-back'></i> Back to Dashboard
          </Link>
        </div>


        <div className="event-list">
          {/* <h3>Events</h3> */}
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              {/* Add more details as needed */}
            </div>
          ))}
          <div className="add-event-form">
            <h3>Add New Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Event Date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
