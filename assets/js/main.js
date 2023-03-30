const localTime = document.querySelector(".localTime");
const wind = document.querySelector(".wind");
const cloudniss = document.querySelector(".cloudniss");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const geo = document.querySelector(".geo");

const date = new Date();
localTime.textContent = date.toLocaleString();

const sunriseTimestamp = 1680154869;
const sunriseDate = new Date(sunriseTimestamp * 1000);
const sunriseTimeString = sunriseDate.toLocaleTimeString();

const sunsetTimestamp = 1680200921;
const sunsetDate = new Date(sunsetTimestamp * 1000);
const sunsetTimeString = sunsetDate.toLocaleTimeString();

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=	51.509865&lon=-0.118092&appid=b92d874f14985184b6a96ed8d4fc539b"
)
  .then((response) => response.json())
  .then((data) => {
    wind.textContent = `Fresh Breeze ${data.wind.speed} m/s West (${data.wind.deg})`;
    cloudniss.textContent = `${data.weather[0].description}`;
    pressure.textContent = `${data.main.pressure}`;
    humidity.textContent = `${data.main.humidity} %`;
    sunrise.textContent = `${sunriseTimeString} `;
    sunset.textContent = `${sunsetTimeString}`;
    geo.textContent=`[${data.coord.lat}, ${data.coord.lon}]`

    console.log(data);
  });
