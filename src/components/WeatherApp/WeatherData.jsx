import React from 'react';

const WeatherData = (props) => {
    const {
        name,
        deg,
        speed,
        country,
        main,
        sunset,
        humidity,
        pressure,
        time
    } = props.newData

    return (
        <>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className="wi wi-day-sunny"></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{deg}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{main}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>

                <div className="date"> {new Date().toLocaleString()} </div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-sunset"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {time} <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-humidity"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-rain"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className="wi wi-strong-wind"></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default WeatherData;