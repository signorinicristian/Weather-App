import React from "react"
import Weather from "./Weather"
import { useState } from 'react'
import './App.css'

function App() {

  const [weather, setWeather] = React.useState(null)

  const [inputText, setInputText] = React.useState("")

  const apiKey = 'cc0cd9da2231eeff3d7713af787d0ea7';

  function submitWeatherHandler(e) {
    e.preventDefault();
    const city = inputText;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404") {
          alert("City not found. Please, enter a valid city.");
        } else {
          setWeather(data);
        }
      })
      .catch((error) => {
        alert("Error getting weather data. Please try again.");
      });
  
    setInputText("");
  }

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
    <div class="app-container">
        <div class="app-header">
            <div class="app-title">
                <h1 class="title">Weather App</h1>
            </div>
            <div class="app-input">
                <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Search your city!" class="input-city" />
                <div onClick={submitWeatherHandler} class="search-icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="app-content">
              {weather ? <Weather 
                      description={weather.weather[0].description}
                      icon={weather.weather[0].icon}
                      temperature={weather.main.temp}
                      windSpeed={weather.wind.speed}
                      country={weather.sys.country}
                      city={weather.name}
                  /> : <h1 className="please">Please enter a city name!</h1>}
        </div>
    </div>
    <footer>
        <p class="footer-text">This website was created using OpenWeather API</p>
    </footer>
    </>
  )
}

export default App
