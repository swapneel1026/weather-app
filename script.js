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
          sunnyImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
          sunnyText.innerHTML = data.weather[0].main;
          precipitation.innerHTML = `${data.main.humidity}%`;
          tempText.innerHTML = Math.floor(data.main.temp - 273.15);
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
    // const { name } = data;
    // const { icon, description } = data.weather[0];
    // const { temp, humidity } = data.main;
    // console.log(icon, description);
    placeName.innerHTML = data.name;
    sunnyImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    sunnyText.innerHTML = data.weather[0].main;
    precipitation.innerHTML = `${data.main.humidity}%`;
    tempText.innerHTML = Math.floor(data.main.temp - 273.15);
  },
  search: function () {
    this.fetchWeather(inputText.value);
  },
};
button.addEventListener("click", function () {
  weather.search();
  input.style.visibility = "hidden";
  input.style.opacity = "0";
  button.style.visibility = "hidden";
  button.style.opacity = "0";
  placeName.style.visibility = "visible";

});
/***********************************/

// date function
const currentDate = new Date();

day.innerHTML = `${currentDate.toLocaleString("en-US", { weekday: "long" })},`;

monthDate.innerHTML = ` ${currentDate
  .toLocaleString("en-US", { month: "long" })
  .substring(0, 3)} ${currentDate.getDate()}  `;

//day/night background and icons change
// let morning = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let night = [1, 2, 3, 19, 20, 21, 22, 23, 0];
if (night.includes(currentDate.getHours())) {
  container.style.background = "url('/weather-app/icons/night.jpg')";
  container.style.transition = "all ease 1s";
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundSize = "cover";
  sunnyImg.src = "/weather-app/icons/moon-6677.svg";
} else {
  container.style.background = "url('/weather-app/icons/day.jpg')";
  container.style.transition = "all ease 1s";
  sunnyImg.src = "/weather-app/icons/sun-8759.svg";
  container.style.backgroundRepeat = "no-repeat";
  container.style.backgroundSize = "cover";
}
