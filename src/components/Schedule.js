import React from 'react';

const shuttleData = [
  {
    location: "Location A",
    availableShuttles: 3,
    drivers: ["Driver A", "Driver B", "Driver C"],
  },
  {
    location: "Location B",
    availableShuttles: 2,
    drivers: ["Driver X", "Driver Y"],
  },
  // Add more locations and data as needed
];

function Schedule() {
  return (
    <div className="content">
      <h2>Shuttle Availablity</h2>
      <ul>
        {shuttleData.map((shuttleInfo, index) => (
          <li key={index}>
            <strong>Location:</strong> {shuttleInfo.location}<br />
            <strong>Available Shuttles:</strong> {shuttleInfo.availableShuttles}<br />
            <strong>Drivers:</strong> {shuttleInfo.drivers.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
