function getWeather() {
  const apiKey = 'dd664bd2d988098be3a1f630f3cbeea2'; // Replace with your actual API key
  const city = document.getElementById('city').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract relevant weather information from the API response
      const cityName = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      // Update the weather information on the webpage
      document.getElementById('city-name').innerText = cityName;
      document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
      document.getElementById('description').innerText = `Description: ${description}`;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}
