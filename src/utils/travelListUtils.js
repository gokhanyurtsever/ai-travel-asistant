let travelList = [];

// Function to add a new travel
const addTravel = (destination, startDate, endDate, budget) => {
    const newTravel = {
        id: Date.now(),
        destination,
        startDate,
        endDate,
        budget,
        activities: []
    };
    travelList.push(newTravel);
    return newTravel;
};

// Function to display travel list using a loop
const showTravelList = () => {
    travelList.forEach(travel => {
        console.log(`Destination: ${travel.destination}, Dates: ${travel.startDate} - ${travel.endDate}`);
    });
};

export { addTravel, showTravelList, travelList };  