const API_KEY = `3a769fb153b27ab3ff8282bd40c9c2df`
const searchBtn = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res=> res.json())
    .then(data => displayTemperature(data))
}
const setText = (id, text) =>{
    document.getElementById(id).innerText= text
}
const displayTemperature = (temperature) =>{
    setText('city', temperature.name)
    setText('temp', temperature.main.temp)
    setText('clouds', temperature.weather[0].main)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}