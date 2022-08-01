const conferfmBtn = document.querySelector("#confirm-city-button");
const cityInput = document.querySelector("#city-name-input");
const body = document.querySelector("body");
let nameOfCity = document.querySelector(".name-of-city");
let temprature = document.querySelector(".temprature");
let windSpeed = document.querySelector(".wind-speed");
let clouds = document.querySelector(".clouds");
let warningParagraph = document.querySelector(".warning-paragraph");

async function weatherApp() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=33eb251a59e70a4762c2ce771ec0f0ec`
  );
  const data = await response.json();
  nameOfCity.textContent += data.name;

  let degreesCelcius = String.fromCodePoint(8451);
  temprature.textContent += `max ${(data.main.temp_max - 273.15).toFixed(
    2
  )}${degreesCelcius},
   min ${(data.main.temp_min - 273.15).toFixed(2)}${degreesCelcius},
    and it feels like ${(data.main.feels_like - 273.15).toFixed(
      2
    )}${degreesCelcius}`;

  windSpeed.textContent += `${data.wind.speed}`;

  clouds.textContent += `${data.weather[0].description}`;
}
conferfmBtn.addEventListener("click", () => {
  if (cityInput.value == "") {
    warningParagraph.innerHTML = "Please enter a city name";
  } else {
    weatherApp();
    cityInput.value = "";
  }
});
cityInput.addEventListener("click", () => {
  clouds.innerHTML = "Clouds status: ";
  nameOfCity.innerHTML = "Location: ";
  warningParagraph.innerHTML = "";
  windSpeed.innerHTML = "Wind speed: ";
  temprature.innerHTML = "Temprature: ";
});
