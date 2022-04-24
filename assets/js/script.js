
var owAPI = "f4ca63fe60c915639b5226ae9b65c99f";
var searchCity = document.getElementById("search-city");
var searchButton = document.getElementById("search-button");
var currentWeather = document.getElementById("current-weather");
var cityName = document.getElementById("cityLocation");
var temp = document.getElementById("temp-label");
var wind = document.getElementById("wind-label");
var humidity = document.getElementById("hu-label");

searchButton.addEventListener('click', function () {
    var search = searchCity.value.trim();
    weatherCurrent(search);
    weatherForecast(search);
    console.log(search);
    history();
    document.getElementById("date").innerHTML = Date();
});

document.getElementById("search-city")
    .addEventListener("keyup", function() {
        if (keyCode === 13) {
            document.getElementById("search-button").click();
        }
    });

function weatherCurrent(cityLocation) {
    let api = "https://api.openweathermap.org/data/2.5/weather?q=" + cityLocation + "&appid=" + owAPI;
    fetch(api).then((res) => {
        res.json().then((data) => {
            console.log(data);
            cityName.innerHTML = data.name;
            temp.innerHTML = "temp-label= " + Math.round(((data.main.temp)-273) * (9/5) + 32) + " &#176F";
            wind.innerHTML = "wind-label= " + data.wind.speed + "MPH";
            humidity.innerHTML = "hu-label= " + data.main.humidity + "%";
            var icon = data.weather[0].icon;
            WeatherImage.setAttribute(
            "src",
            "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        )}
    );
});

function weatherForecast(cityLocation) {
    let apiForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityLocation + "&units=imperial&appid=" + owAPI;
        fetch(apiForecast)
        .then(function(response){
        return response.json()
    }).then(function(data){
        console.log("future array")
        displayData(data);
    })
}};

