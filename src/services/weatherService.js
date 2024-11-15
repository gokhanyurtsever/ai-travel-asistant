// src/services/weatherService.js

// Simulated weather data
const simulatedWeatherData = {
  temperature: 25,
  condition: 'Sunny',
  city: 'Sample City'
};

// Asynchronous function simulating a weather API call
async function getSimulatedWeather() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(simulatedWeatherData);
    }, 1000); // Simulating a delay of 1 second
  });
}

// Function to be replaced with real API call in Week 5
async function getWeather(city) {
  // This will be replaced with actual API call in Week 5
  console.log(`Fetching weather for ${city}...`);
  return getSimulatedWeather();
}

export { getWeather };
