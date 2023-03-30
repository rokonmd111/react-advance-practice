import React, { useEffect, useState } from 'react';
import './WeatherApp.css'
import WeatherData from './WeatherData';

const WeatherApp = () => {
    const [inputData, setInputData] = useState('dhaka')
    const [weatherData, setWeatherData] = useState({});
    console.log(weatherData);

    useEffect(() => {

        //api not working properly
        const fetchData = async () => {
          let apiKey = '95463029f582d82b6d4c87dcc3bbfa63'
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${apiKey}`);
          const newData = await response.json();
          setWeatherData(newData)
        };
      
        fetchData();
      }, []);


    // Distructure weather Data
    const { name } = weatherData
    const { deg, speed } = weatherData.wind
    const { country, sunset } = weatherData.sys
    const { main } = weatherData.weather[0]
    const { humidity, pressure } = weatherData.main

    const sec = sunset;
    const min = new Date(sec * 1000);
    const time = `${min.getHours()}:${min.getMinutes()}`

    const newData = {
        name,
        deg,
        speed,
        country,
        main,
        sunset,
        humidity,
        pressure,
        time
    }

    
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" autoFocus id="search" className="searchTerm" placeholder='Search...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button className="searchButton" type='button'>Search</button>
                </div>
            </div>
            <WeatherData newData={newData}></WeatherData>
        </>
    );
};

export default WeatherApp;