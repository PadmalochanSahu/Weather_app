const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const apiKey = 'a017d2be11bacc6a61797da4d4eb2db3';

async function checkWeather(city){
    let response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log('data',data);   


    document.getElementById('city').innerHTML = data.name;
    document.getElementById('temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} km/h`;
    let weatherIcon = document.getElementById('weatherIcon');
     if(data.weather[0].main == 'Clear'){
         weatherIcon.src = '/images/clear.png'; 
        }else if (data.weather[0].main == 'Clouds'){
        weatherIcon.src = '/images/clouds.png';
        }else if (data.weather[0].main == 'Drizzle'){
            weatherIcon.src = '/images/drizzle.png'
        }else if (data.weather[0].main == 'Mist'){
            weatherIcon.src = '/images/mist.png'
        }else if (data.weather[0].main == 'Rain'){
            weatherIcon.src = '/images/rain.png'
        }
        else if (data.weather[0].main == 'Haze'){
            weatherIcon.src = '/images/clear.png'
        }else{
            weatherIcon.src = '/images/snow.png'
        }

    }
    
    let searchBox = document.getElementById('searchValue');
    let searchBtn = document.getElementById('searchButton');
    
    searchBtn.addEventListener("click", () =>{
        checkWeather(searchBox.value);
        document.querySelector('.weather').style.display = "block";
        document.querySelector('#heading').style.display = "none";


})

