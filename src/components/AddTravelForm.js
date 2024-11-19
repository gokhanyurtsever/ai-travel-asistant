import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';

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
        <Card>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Destination" 
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)} 
                />
                <Input 
                    type="date" 
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                />
                <Input 
                    type="date" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)} 
                />
                <Button type="submit">Add Travel</Button>
            </form>
        </Card>
    );
}

export default AddTravelForm;
