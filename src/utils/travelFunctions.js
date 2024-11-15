// src/utils/travelFunctions.js

import { DAILY_FOOD_COST, DAILY_ACCOMMODATION_COST } from './constants';

// Calculate travel duration in days
const calculateTravelDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = (end - start) / (1000 * 60 * 60 * 24);
  return Math.round(durationInDays);
};

// Calculate daily budget
const calculateDailyBudget = (totalBudget, travelDuration) => {
  return totalBudget / travelDuration;
};

// Calculate estimated total cost
const calculateTotalCost = (travelDuration) => {
  return travelDuration * (DAILY_FOOD_COST + DAILY_ACCOMMODATION_COST);
};

export { calculateTravelDuration, calculateDailyBudget, calculateTotalCost };

