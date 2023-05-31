const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const apiKey = 'a017d2be11bacc6a61797da4d4eb2db3';

async function checkWeather(city) {
    debugger;
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    if (data.name == undefined) {
        document.getElementById('error').style.display = 'none';
        document.querySelector('.weather').style.display = "none";
        document.querySelector('#heading').style.display = "block";
    } else {
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} km/h`;
        let weatherIcon = document.getElementById('weatherIcon');
        if (data.weather[0].main == 'Snow') {
            weatherIcon.src = './assets/images/snow.png';
        } else if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = '/images/clouds.png';
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = '/images/drizzle.png'
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = '/images/mist.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = '/images/rain.png'
        } else {
            weatherIcon.src = './assets/images/clear.png'
        }
        
        document.getElementById('error').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}

let searchBox = document.getElementById('searchValue');
let searchBtn = document.getElementById('searchButton');

searchBtn.addEventListener("click", async() => {
    await checkWeather(searchBox.value);
    document.querySelector('#heading').style.display = "none";
})

