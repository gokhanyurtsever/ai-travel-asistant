// src/context/TravelContext.js (güncel)
import React, { createContext, useState, useContext } from 'react';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [travels, setTravels] = useState([]);

  const addTravel = (newTravel) => {
    setTravels(prevTravels => [...prevTravels, { ...newTravel, id: Date.now().toString() }]);
  };

  const deleteTravel = (travelId) => {
    setTravels(prevTravels => prevTravels.filter(travel => travel.id !== travelId));
  };

  return (
    <TravelContext.Provider value={{ travels, addTravel, deleteTravel }}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => useContext(TravelContext);
