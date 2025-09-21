// Selecting HTML elements 
const currentTemp = document.querySelector('#fahrenheit-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=13.98&lon=-89.54&units=metric&appid=7baddc2deefd13593effaef3d49fdb23";

// Forecast selectors
const todayDay = document.querySelector('#today');
const tomorrowDay = document.querySelector('#tomorrow-day');
const afterTomorrowDay = document.querySelector('#after-tomorrow-day');
const forecastToday = document.querySelector('#forecast-today');
const tomorrow = document.querySelector('#tomorrow');
const afterTomorrow = document.querySelector('#after-tomorrow');

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

// Function to get the names of the week dinamically 
function getDayNames() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const afterTomorrow = new Date(today);
    afterTomorrow.setDate(today.getDate() + 2);

    const options = { weekday: 'long' };

    return {
        today: today.toLocaleDateString('en-US', options),
        tomorrow: tomorrow.toLocaleDateString('en-US', options),
        afterTomorrow: afterTomorrow.toLocaleDateString('en-US', options)
    };
}

// Display JSON data to web page
function displayResults(data) {
    // Get days names
    const dayNames = getDayNames();

    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;C`
    captionDesc.innerHTML = data.list[0].weather[0].description
    maxTemp.innerHTML = `${data.list[0].main.temp_max}&deg;C`
    minTemp.innerHTML = `${data.list[0].main.temp_min}&deg;C`
    humidity.innerHTML = `${data.list[0].main.humidity}%`

    // Converting the values from API to readable code (consulted via AI how to do this)
    sunrise.innerHTML = new Date(data.city.sunrise * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    sunset.innerHTML = new Date(data.city.sunset * 1000).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    // Forecast section
    todayDay.innerHTML = dayNames.today;
    tomorrowDay.innerHTML = dayNames.tomorrow;
    afterTomorrowDay.innerHTML = dayNames.afterTomorrow;

    forecastToday.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;C`;
    tomorrow.innerHTML = `${Math.round(data.list[8].main.temp)}&deg;C`;
    afterTomorrow.innerHTML = `${Math.round(data.list[16].main.temp)}&deg;C`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description);
}

apiFetch();