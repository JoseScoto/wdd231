// Selecting HTML elements 
const currentTemp = document.querySelector('#fahrenheit-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=13.98&lon=-89.54&units=metric&appid=7baddc2deefd13593effaef3d49fdb23";

// Defining async function
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

// Display JSON data to web page
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    captionDesc.innerHTML = data.weather[0].description
    maxTemp.innerHTML = `${data.main.temp_max}&deg;F`
    minTemp.innerHTML = `${data.main.temp_min}&deg;F`
    humidity.innerHTML = `${data.main.humidity}%`

    // Converting the values from API to readable code (consulted via AI how to do this)
    sunrise.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    sunset.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}

apiFetch();