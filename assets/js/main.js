const localTime = document.querySelector(".localTime");
const wind = document.querySelector(".wind");
const cloudniss = document.querySelector(".cloudniss");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const geo = document.querySelector(".geo");
const headerTemperature = document.querySelector(".header-temperature");
const headerCloudiness = document.querySelector(".header-cloudiness");
const headerTime = document.querySelector(".header-time");

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const day = date.getDate();
const monthNum = date.getMonth();
const year = date.getFullYear();
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthName = month[monthNum];

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=51.509865&lon=-0.118092&appid=b92d874f14985184b6a96ed8d4fc539b"
)
  .then((response) => response.json())
  .then((data) => {
    const tempInKelvin = `${data.main.temp}`;
    const tempInCelsius = (tempInKelvin - 273.15).toFixed(1);

    const sunriseTimestamp = `${data.sys.sunrise}`;
    const sunriseDate = new Date(sunriseTimestamp * 1000);
    const sunriseTimeString = sunriseDate.toLocaleTimeString();

    const sunsetTimestamp = `${data.sys.sunset}`;
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    const sunsetTimeString = sunsetDate.toLocaleTimeString();

    let windDir
    if (data.wind.deg >= 45 && data.wind.deg <= 135) {
      windDir = "East"
    } else if (data.wind.deg > 135 && data.wind.deg <= 225) {
      windDir = "South"
    } else if (data.wind.deg > 225 && data.wind.deg <= 315) {
      windDir = "West"
    } else {
      windDir = "Nord"
    }

    function capitalize(string) {
      return string.slice(0, 1).toUpperCase() + string.slice(1)
    }

    let breeze
    if (data.wind.speed === 0) {
      breeze = "No breeze"
    } else if (data.wind.speed <= 2) {
      breeze = "Low breeze"
    } else if (data.wind.speed <= 4) {
      breeze = "Moderate beeze"
    } else if (data.wind.speed >= 5) {
      breeze = "Fresh breeze"
    } else if (data.wind.speed >= 6) {
      breeze = "Strong breeze"
    } else if (data.wind.speed <= 8) {
      breeze = "Stormy wind"
    } else {
      breeze = "Heavy storm"
    }

    let addNull
    if (minute < 10) {
      addNull = "0" + minute
    }

    localTime.textContent = `${hour}:${addNull}, ${day} ${monthName} ${year}`;
    wind.textContent = `${breeze} ${data.wind.speed} m/s ${windDir} (${data.wind.deg})`;
    cloudniss.textContent = capitalize(data.weather[0].description);
    pressure.textContent = `${data.main.pressure}`;
    humidity.textContent = `${data.main.humidity} %`;
    sunrise.textContent = `${sunriseTimeString} `;
    sunset.textContent = `${sunsetTimeString}`;
    geo.textContent = `[${data.coord.lat.toFixed(2)} ${data.coord.lon.toFixed(2)}]`;
    headerTemperature.textContent = `${tempInCelsius} °C`;
    headerCloudiness.textContent = capitalize(data.weather[0].description);
    headerTime.textContent = `${hour + 1
      }:${addNull}, ${day} ${monthName} ${year}`;

    console.log(data);
  });


