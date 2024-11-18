import React, { useState, useEffect } from 'react';
import { getWeather } from '../services/weatherService';

function TravelDetails({ travel }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (travel) {
      getWeather(travel.destination).then(data => setWeather(data));
    }
  }, [travel]);

  if (!travel) return <div>No travel selected.</div>;

  return (
    <div>
      <h2>{travel.destination}</h2>
      <p>Dates: {travel.startDate} - {travel.endDate}</p>
      {weather && (
        <p>Weather: {weather.temperature}, {weather.condition}</p>
      )}
    </div>
  );
}

export default TravelDetails;
