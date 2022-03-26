const placeName = document.getElementById("placename");
const sunnyImg = document.getElementById("sun");
const sunnyText = document.getElementById("sun-text");
const precipitation = document.getElementById("preci");
const tempText = document.getElementById("temp-text");
const day = document.getElementById("day");
let container = document.getElementById("contain");
const monthDate = document.getElementById("month");
let input = document.getElementById("input");
let button = document.getElementById("btn");
let inputText = document.getElementById("input-text");

function searchPlace() {
  input.style.visibility = "visible";
  input.style.opacity = "1";
  button.style.visibility = "visible";
  button.style.opacity = "1";
  placeName.style.visibility = "hidden";
  inputText.value = "";
}
function fetchCurrentLocation() {
  let lat;
  let lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e80c221352779280c0f3748f6a8d389`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          placeName.innerHTML = data.name;
          sunnyImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          sunnyText.innerHTML = data.weather[0].main;
          precipitation.innerHTML = `${data.main.humidity}%`;
          tempText.innerHTML = Math.floor(data.main.temp - 273.15);
          if (data.weather[0].main === "Haze") {
            container.style.backgroundImage =
              "url('/weather-app/icons/istockphoto-1341515382-170667a (1).jpg')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "black";
          } else if (data.weather[0].main === "Clear") {
            container.style.backgroundImage =
              "url('/weather-app/icons/istockphoto-1126610893-170667a.jpg')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "rgb(53,146,213)";
          } else if (data.weather[0].main === "Clouds") {
            container.style.backgroundImage =
              "url('/weather-app/icons/gorgeous-clouds-background-with-blue-sky-design_1017-25501.webp')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "rgb(167, 166, 166)";
          } else if (data.weather[0].main === "Rain") {
            container.style.backgroundImage =
              "url('/weather-app/icons/photo-1534274988757-a28bf1a57c17.avif')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "rgb(21,21,21)";
          }
        });
    });
    getRequest(placeName.innerHTML);
  }
}
//getting current location through systems location
window.addEventListener("load", () => {
  let lat;
  let lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0e80c221352779280c0f3748f6a8d389`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          placeName.innerHTML = data.name;
          getRequest(placeName.innerHTML);
          sunnyImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          sunnyText.innerHTML = data.weather[0].main;
          precipitation.innerHTML = `${data.main.humidity}%`;
          tempText.innerHTML = Math.floor(data.main.temp - 273.15);
          if (data.weather[0].main === "Haze") {
            container.style.backgroundImage =
              "url('/weather-app/icons/istockphoto-1341515382-170667a (1).jpg')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "black";
          } else if (data.weather[0].main === "Clear") {
            container.style.backgroundImage =
              "url('/weather-app/icons/istockphoto-1126610893-170667a.jpg')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "rgb(53,146,213)";
          } else if (data.weather[0].main === "Clouds") {
            container.style.backgroundImage =
              "url('/weather-app/icons/gorgeous-clouds-background-with-blue-sky-design_1017-25501.webp')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "rgb(167, 166, 166)";
          } else if (data.weather[0].main === "Rain") {
            container.style.backgroundImage =
              "url('/weather-app/icons/photo-1534274988757-a28bf1a57c17.avif')";
            document.querySelector(
              ".display-forecast-flex"
            ).style.backgroundColor = "rgb(21,21,21)";
          }
        });
    });
  }
});

let weather = {
  APIkey: "0e80c221352779280c0f3748f6a8d389",
  fetchWeather: function (cityName) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0e80c221352779280c0f3748f6a8d389`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;

    if (data.name !== undefined) {
      placeName.innerHTML = data.name;
      sunnyImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      sunnyText.innerHTML = data.weather[0].main;
      precipitation.innerHTML = `${data.main.humidity}%`;
      tempText.innerHTML = Math.floor(data.main.temp - 273.15);
      if (data.weather[0].main === "Haze") {
        container.style.backgroundImage =
          "url('/weather-app/icons/istockphoto-1341515382-170667a (1).jpg')";
        document.querySelector(".display-forecast-flex").style.backgroundColor =
          "black";
      } else if (data.weather[0].main === "Clear") {
        container.style.backgroundImage =
          "url('/weather-app/icons/istockphoto-1126610893-170667a.jpg')";
        document.querySelector(".display-forecast-flex").style.backgroundColor =
          "rgb(53,146,213)";
      } else if (data.weather[0].main === "Clouds") {
        container.style.backgroundImage =
          "url('/weather-app/icons/gorgeous-clouds-background-with-blue-sky-design_1017-25501.webp')";
        document.querySelector(".display-forecast-flex").style.backgroundColor =
          "rgb(167, 166, 166)";
      } else if (data.weather[0].main === "Rain") {
        container.style.backgroundImage =
          "url('/weather-app/icons/photo-1534274988757-a28bf1a57c17.avif')";
        document.querySelector(".display-forecast-flex").style.backgroundColor =
          "rgb(21,21,21)";
      }
    } else {
      alert("Either Location not Found or invalid ❗");
    }
  },
  search: function () {
    this.fetchWeather(inputText.value);
    getRequest(inputText.value);
  },
};
button.addEventListener("click", function () {
  if (inputText.value !== "") {
    weather.search();
    input.style.visibility = "hidden";
    input.style.opacity = "0";
    button.style.visibility = "hidden";
    button.style.opacity = "0";
    placeName.style.visibility = "visible";
  } else {
    alert("Location feild is Empty.❌");
  }
});
/***********************************/

async function getRequest(city) {
  let APIkey = "0e80c221352779280c0f3748f6a8d389";

  console.log(city);

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`
  );
  parsedResponse = await response.json();
  console.log(parsedResponse);
  let cityResponse = [];
  cityResponse = parsedResponse.list;
  console.log(cityResponse);
  let displayForecastFlex = document.querySelector(".display-forecast-flex");
  displayForecastFlex.innerHTML = "";
  for (let i = 0; i < cityResponse.length; i += 7) {
    let dateForecast = document.createElement("div");
    dateForecast.setAttribute("class", "date-forecast");
    let iconForecast = document.createElement("img");
    iconForecast.setAttribute("class", "icon-forecast");
    let temperatureForecast = document.createElement("div");
    temperatureForecast.setAttribute("class", "temperature-forecast");
    let displayForecast = document.createElement("div");
    displayForecast.setAttribute("class", "display-forecast");

    dateForecast.innerHTML = `${cityResponse[i].dt_txt.substring(
      8,
      10
    )}/${cityResponse[i].dt_txt.substring(5, 7)}`;
    document.querySelector(".display-forecast-flex").style.visibility =
      "visible";
    document.querySelector(".forecast-h1").style.visibility = "visible";

    iconForecast.src = `http://openweathermap.org/img/wn/${cityResponse[i].weather[0].icon}.png`;
    temperatureForecast.innerHTML = `${Math.floor(
      cityResponse[i].main.temp - 274.15
    )}°C`;

    displayForecast.append(dateForecast);
    displayForecast.append(iconForecast);
    displayForecast.append(temperatureForecast);
    displayForecastFlex.append(displayForecast);
  }
}

// date function
const currentDate = new Date();

day.innerHTML = `${currentDate.toLocaleString("en-US", { weekday: "long" })},`;

monthDate.innerHTML = ` ${currentDate
  .toLocaleString("en-US", { month: "long" })
  .substring(0, 3)} ${currentDate.getDate()}  `;
