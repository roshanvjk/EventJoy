import { useState } from 'react';
import '../Pages/Css/deleteEvent.css'; // Adjust the path to your CSS file
import { Link } from 'react-router-dom';

const DeleteEvent = () => {
  // Assuming a static list of events
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-03-15' },
    { id: 2, name: 'Event 2', date: '2024-04-20' },
    { id: 3, name: 'Event 3', date: '2024-05-25' },
    // Add more events as needed
  ]);

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
  };

  return (
    <>
      <div className="delete-event-container">
        <div className="header">
          <h2>Delete Event</h2>
          <Link to="/dash" className="back-link">
            <i className='bx bx-arrow-back'></i> Back to Dashboard
          </Link>
        </div>

        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <button onClick={() => handleDelete(event.id)} className="delete-button">
                Delete
              </button>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DeleteEvent;
