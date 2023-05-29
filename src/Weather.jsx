import React from "react"

export default function Weather({description, icon, temperature, windSpeed, country, city}) {

    function capFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    return (
        <>
        <div class="city-container">
                <h2 class="city-name">{country}, {city}</h2>
            </div>
            <div class="weather">
                <img src={`/src/icons/${icon}.png`} />
                <h3 class="weather-description">{capFirst(description)}</h3>
            </div>
            <div class="list-info">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <polyline points="11 12 12 12 12 16 13 16" />
                  </svg>
                <h2 class="info-text">The temperature in {city} is {temperature} Celsius.</h2>
            </div>
            <div class="list-info">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-square" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <polyline points="11 12 12 12 12 16 13 16" />
                  </svg>
                <h2 class="info-text">The wind speed is {windSpeed} km/h</h2>
            </div>
        </>
    )
}