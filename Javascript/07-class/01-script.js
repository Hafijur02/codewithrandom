// fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m')
//       .then(response => response.json())
//       .then((data) => console.log(data))
// .then(json => console.log(json))


// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m

async function fetchWeatherData() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const currentWeather = data.current_weather;
    console.log(`Temperature: ${currentWeather.temperature} °C`);
    console.log(`Wind Speed: ${currentWeather.windspeed} m/s`);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchWeatherData();


/*
The fetchWeatherData function is defined as an async function.
It uses await to wait for the fetch call to complete and for the response to be converted to JSON.
It checks if the response is okay, throwing an error if not.
It extracts and logs the temperature and wind speed from the current_weather object.
It catches and logs any errors that occur during the fetch operation.
*/
