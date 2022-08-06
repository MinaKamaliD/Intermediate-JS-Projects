let citiesData = {
  Tehran: {
    city: "Tehran",
    temp: 12,
    weather: "Cloudy",
    humidity: 23,
    windSpeed: 32,
  },
  Shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 12,
    windSpeed: 14,
  },
  Tabriz: {
    city: "Tabriz",
    temp: 1,
    weather: "rainy",
    humidity: 43,
    windSpeed: 12,
  },
  Mashhad: {
    city: "Mashhad",
    temp: -2,
    weather: "snowy",
    humidity: 7,
    windSpeed: 24,
  },
  Isfahan: {
    city: "Isfahan",
    temp: 23,
    weather: "Sunny",
    humidity: 15,
    windSpeed: 18,
  },
};
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");

let weatherDiv = document.querySelector(".weather");
let searchBar = document.querySelector(".search-bar");
let searchIcon = document.querySelector("button");

function getInformation() {
  let cityData = citiesData[searchBar.value];
  if (cityData) {
    weatherDiv.classList.remove("loading");
    city.innerHTML = "Weather in " + searchBar.value;
    temp.innerHTML = cityData.temp + "°C";
    description.innerHTML = cityData.weather;
    humidity.innerHTML = "Humidity: " + cityData.humidity + " %";
    windSpeed.innerHTML = "Wind Speed: " + cityData.windSpeed + " km/h";
  } else {
    alert("Plaese Enter the Name of the City");
  }
}

searchIcon.addEventListener("click", getInformation);
