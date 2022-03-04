const API_KEY = ``;

const searchTemparature = () => {
    const city = document.getElementById('city-name-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const setWeatherIcon = (weatherCondition) => {
    const weatherIcon = document.getElementById('weatherIcon');
    const url = `http://openweathermap.org/img/wn/${weatherCondition}@2x.png`
    weatherIcon.setAttribute('src', url);
}

const displayTemparature = (tempData) => {
    setInnerText('city-name-display', tempData.name);
    setInnerText('display-temp', tempData.main.temp);
    setInnerText('condition', tempData.weather[0].main);
    setWeatherIcon(tempData.weather[0].icon);
    console.log(tempData);
}
