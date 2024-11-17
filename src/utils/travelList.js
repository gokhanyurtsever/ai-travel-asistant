import React from 'react';

function Travels({ travels }) {
    return (
        <div>
            <h2>Your Travels</h2>
            <ul>
                {travels.map(travel => (
                    <li key={travel.id}>
                        {travel.destination}: {travel.startDate} - {travel.endDate}
                    </li>
                ))}
            </ul>
        </div>
    );    
}

export default TravelList;
