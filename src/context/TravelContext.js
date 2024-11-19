import React, { createContext, useReducer, useContext } from 'react';

const TravelContext = createContext();

const initialState = {
  travels: [],
  selectedTravel: null,
};

function travelReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRAVEL':
      return { ...state, travels: [...state.travels, action.payload] };
    case 'SELECT_TRAVEL':
      return { ...state, selectedTravel: action.payload };
    default:
      return state;
  }
}

export const TravelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(travelReducer, initialState);

  return (
    <TravelContext.Provider value={{ state, dispatch }}>
      {children}
    </TravelContext.Provider>
  );
};

export const useTravelContext = () => useContext(TravelContext);
