
var owAPI = "f4ca63fe60c915639b5226ae9b65c99f";
var searchCity = document.getElementById("searchBox");
var searchButton = document.getElementById("search-button");
var currentWeather = document.getElementById("current-weather");
var currentDate = document.getElementById("date");
var cityName = document.getElementById("cityLocation");
var currentTemp = document.getElementById("temperature");
var currentWind = document.getElementById("wind");
var currentHumidity = document.getElementById("humidity");
var currentUV = document.getElementById("uvIndex");

var searchHistory = JSON.parse(localStorage.getItem("search")) || [];

searchButton.addEventListener('click', function () {
    const search = searchCity.value.trim();
    console.log(search);
    history();
    weatherLookup(search);
    weatherForecast(search);
});

function weatherLookup() {
    let api = "https://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&appid" + owAPI;
    fetch(api).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
            displayWeather(data);
});
})}

function displayWeather() {

};

function futureWeather() {
    let apiCast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&units=imperial&appid=" + owAPI;
    fetch(apiCast).then(async function(response) {
        const data = await response.json();
        console.log(data);
})
};


