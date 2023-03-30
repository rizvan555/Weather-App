const div = document.querySelector("div");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=	51.509865&lon=-0.118092&appid=b92d874f14985184b6a96ed8d4fc539b"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

