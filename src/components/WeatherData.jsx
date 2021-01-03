import React, { useContext } from "react";
import Context from "./Context";

const WeatherData = () => {
  const { weather, city, info } = useContext(Context);
  const { temp, temp_min, temp_max, humidity, pressure } = weather;
  const { description, icon } = info;
  return (
    <div className="weather-data">
      <h2 className="weather__tagline">
        Prévision Météo pour <span className="weather-data__city">{city}</span>
      </h2>
      <span className="weather-description">
        <p className="weather-data-title-info">Le Temps</p>
        <p className="weather-data-description">{description}</p>
        <p className="weather-data-icon">
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt='icon weather' />
        </p>
      </span>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">{temp}°c</p>
          <p className="weather-data__title_min">Temperature Minimum</p>
          <p className="weather-data__min">{temp_min}°c</p>
          <p className="weather-data__title_min">Temperature Maximum</p>
          <p className="weather-data__max">{temp_max}°c</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Humidité</p>
          <p className="weather-data__value">{humidity}</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Pression</p>
          <p className="weather-data__value">{pressure}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
