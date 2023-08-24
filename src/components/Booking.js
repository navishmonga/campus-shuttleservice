import React, { useState } from 'react';

function Booking() {
  const [date, setCurrentDate] = useState('');
  const [time, setCurrentTime] = useState('');
  const [destination, setCurrentDestination] = useState('');
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Simulate booking process
    
    // For demonstration purposes, we'll just set a timeout to simulate a booking process
    setTimeout(() => {
      setIsBookingSuccess(true);
    }, 2000);
  };

  return (
    <div className="content">
      <h2>Book a Shuttle</h2>
      <form onSubmit={handleBookingSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setCurrentTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setCurrentDestination(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Book Shuttle</button>
      </form>
      {isBookingSuccess && <p>Booking successful! You're all set.</p>}
    </div>
  );
}

export default Booking;
