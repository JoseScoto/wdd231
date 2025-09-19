// Selecting HTML elements 
const townName = document.querySelector('#town')
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=7baddc2deefd13593effaef3d49fdb23";

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
    townName.innerHTML = data.name
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    captionDesc.innerHTML = data.weather[0].description
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}

apiFetch();