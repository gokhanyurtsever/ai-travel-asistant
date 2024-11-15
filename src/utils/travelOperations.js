import { travelList } from './travelList';

// Function to filter travels by destination
const filterTravelsByDestination = (destination) => {
    return travelList.filter(travel => travel.destination === destination);
};

export { filterTravelsByDestination };
