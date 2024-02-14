import { useState, useEffect } from 'react';
import axios from 'axios';
import "../Pages/Css/Book.css"
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const user = useSelector(selectUser);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // To store the selected event for viewing details
  const [showOverlay, setShowOverlay] = useState(false); // To control the visibility of the overlay

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/booked-events/' + user.email);
        setEvents(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if(user){
      fetchData();
    }
  }, [user]); // Include only user in the dependency array

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    setShowOverlay(true);
  };

  return (
    <>
    <br/>
    <div className="EventDetailsContainer">
      <h1>Event Details</h1>
      <table className="EventDetailsTable">
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Applicant Address</th>
            <th>Attendees</th>
            <th>Applicant Mobile</th>
            <th>Reference</th>
            <th>Event Address</th>
            <th>Event Description</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.eventId}>
              <td>{event.eventId}</td>
              <td>{event.eventName}</td>
              <td>{event.applicantAddress}</td>
              <td>{event.attendees}</td>
              <td>{event.applicantMobile}</td>
              <td>{event.reference}</td>
              <td>{event.eventAddress}</td>
              <td>{event.eventDescription}</td>
              <td>{event.eventDate}</td>
              <td>{event.eventTime}</td>
              <td>
                <button onClick={() => handleViewDetails(event)}>View</button>
                {/* <Link to="/eventupdate" onClick={() => handleUpdateDetails(event)}>Update</Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
      {showOverlay && (
        <div className="EventDetailsOverlay">
          <div className="EventDetailsCard">
            <h2>Selected Event Details</h2>
            <p>Event ID: {selectedEvent.eventId}</p>
            <p>Event Name: {selectedEvent.eventName}</p>
            <p>Applicant Address: {selectedEvent.applicantAddress}</p>
            <p>Attendees: {selectedEvent.attendees}</p>
            <p>Applicant Mobile: {selectedEvent.applicantMobile}</p>
            <p>Reference: {selectedEvent.reference}</p>
            <p>Event Address: {selectedEvent.eventAddress}</p>
            <p>Event Description: {selectedEvent.eventDescription}</p>
            <p>Event Date: {selectedEvent.eventDate}</p>
            <p>Event Time: {selectedEvent.eventTime}</p>
           
            <button onClick={() => setShowOverlay(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default EventDetails;
