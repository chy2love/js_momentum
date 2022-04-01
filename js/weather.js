const API_KEY = "3470285c6adbd61a37aacca86af31f32";
const cityName = document.querySelector("#city-name");
const currentWeather = document.querySelector("#current-weather");
const averageTemp = document.querySelector("#average-temp");
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = data.name;
      const weather = data.weather[0].main;
      const temperature = data.main.temp;
      cityName.innerText = city;
      currentWeather.innerText = weather;
      averageTemp.innerText = temperature;
    })
  );
}
function onGeoError() {
  alert("Can't find you, No weather");
}
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
