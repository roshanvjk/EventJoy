import { useState } from 'react';
import '../Pages/Css/updateEvent.css'; // Adjust the path to your CSS file
import { Link } from 'react-router-dom';

const UpdateEvent = () => {
  // Assuming a static list of events
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2024-03-15' },
    { id: 2, name: 'Event 2', date: '2024-04-20' },
    { id: 3, name: 'Event 3', date: '2024-05-25' },
    // Add more events as needed
  ]);

  const [editingEvent, setEditingEvent] = useState(null);

  const handleEdit = (eventId) => {
    // Find the event to edit
    const eventToEdit = events.find((event) => event.id === eventId);
    setEditingEvent(eventToEdit);
  };

  const handleUpdate = () => {
    // Placeholder for the update logic
    console.log(`Update event with ID ${editingEvent.id}`);
    // Update the events list
    const updatedEvents = events.map((event) =>
      event.id === editingEvent.id ? editingEvent : event
    );
    setEvents(updatedEvents);
    // Clear the editingEvent state
    setEditingEvent(null);
  };

  return (
    <>
      <div className="update-event-container">
        <div className="header">
          <h2>Update Event</h2>
          <Link to="/dash" className="back-link">
            <i className='bx bx-arrow-back'></i> Back to Dashboard
          </Link>
        </div>

        {editingEvent ? (
          <div className="edit-form">
            <h3>Edit Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={editingEvent.name}
              onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
            />
            <input
              type="date"
              placeholder="Event Date"
              value={editingEvent.date}
              onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
            />
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div className="event-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <h3>{event.name}</h3>
                <p>Date: {event.date}</p>
                <button onClick={() => handleEdit(event.id)} className="edit-button">
                  Edit
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateEvent;
