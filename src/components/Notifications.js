import React, { useState, useEffect } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    //Space for API call
    setTimeout(() => {
      const sampleNotifications = [
        { id: 1, message: 'Shuttle #23 is arriving in 5 minutes.' },
        { id: 2, message: 'Shuttle #45 has been delayed due to maintenance.' },
        { id: 3, message: 'New shuttle timings have been updated.' },
      ];
      setNotifications(sampleNotifications);
    }, 1000);
  }, []);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>Loading notifications...</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
