import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco

function Tracking() {
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [isTrackingActive, setIsTrackingActive] = useState(false);

  const startTracking = () => {
    setIsTrackingActive(true);
    const trackingInterval = setInterval(() => {
      const newLat = currentLocation.lat + 0.01 * (Math.random() - 0.5);
      const newLng = currentLocation.lng + 0.01 * (Math.random() - 0.5);
      setCurrentLocation({ lat: newLat, lng: newLng });
    }, 3000);

    return () => {
      setIsTrackingActive(false);
      clearInterval(trackingInterval);
    };
  };

  return (
    <div className="content">
      <h2>Shuttle Tracking</h2>
      <div style={containerStyle}>
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={15}
            onLoad={() => {
              // This is where you can access the google object
            }}
          >
            {isTrackingActive && <Marker position={currentLocation} />}
          </GoogleMap>
        </LoadScript>
      </div>
      {isTrackingActive ? (
        <button onClick={startTracking} disabled>
          Tracking in progress
        </button>
      ) : (
        <button onClick={startTracking}>Start Tracking</button>
      )}
    </div>
  );
}

export default Tracking;
