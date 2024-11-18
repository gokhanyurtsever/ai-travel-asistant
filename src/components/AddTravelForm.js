import React, { useState } from 'react';

function AddTravelForm({ onAddTravel }) {
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTravel({ destination, startDate, endDate });
        setDestination('');
        setStartDate('');
        setEndDate('');
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Destination" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)} 
          />
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
          />
          <button type="submit">Add Travel</button>
        </form>
      );
    }
    
    export default AddTravelForm;