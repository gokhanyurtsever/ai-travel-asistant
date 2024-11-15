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

async function getWeather(city) {
  console.log(`Fetching weather for ${city}...`);
  return getSimulatedWeather();
}

export { getWeather };
