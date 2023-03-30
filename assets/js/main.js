fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=	51.509865&lon=-0.118092&appid=97274ed796341a5e8aaa7d2bd6602b2f"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
