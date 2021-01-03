import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./WeatherSearch";
import Header from "./Header";
import Cards from "./Cards";
import WeatherData from "./WeatherData";
import Context from "./Context";
import Error from "./Error";
import Datetime from "./Datetime";
import Tagline from "./Tagline";
import Footer from "./Footer";



const Main = () => {
  const [weather, setWeather] = useState()
  const [city, setCity] = useState()
  const [error, setError] = useState()
  const [info, setInfo] = useState()

  const api_call = async e => {
    e.preventDefault()
    const location = e.target.elements.location.value
    // eslint-disable-next-line no-sequences
    if(!location) return setError("Merci d'entrer le nom d'une ville."), setWeather(null)
    const API_KEY = "3a42a2d988e037e1b4f125b8fc126b74";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&&appid=${API_KEY}&lang=fr`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
    setCity(response.data.name);
    setInfo(response.data.weather[0]);
    setError(null);
  };
  console.log(info)

  return (
    <div className="weather">
      <Header />
      <Cards>
        <Tagline />
        <Datetime />
        <Context.Provider value = {{ api_call, weather, city, info, error }}>
        <WeatherSearch />
        {weather && info && <WeatherData />}
      </Context.Provider>
      {error && <Error error = {error} />}
      </Cards>
      <Footer />
    </div>
  );
};

export default Main;
