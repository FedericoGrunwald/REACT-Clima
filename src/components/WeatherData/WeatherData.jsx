import React from "react";
import { useState, useEffect } from "react";
import WeatherSearch from "../WeatherSearch/WeatherSearch";
import WeatherMainInfo from "../WeatherMainInfo/WeatherMainInfo";
import Loading from "../Loading/Loading";

function WeatherData() {
  const [weather, setWeather] = useState(null);

  const REACT_APP_URL = "http://api.weatherapi.com/v1/current.json?aqi=no"
  const REACT_APP_KEY = "f038f6da288f4885ae9140632232006"

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "hermoso campo") {
    console.log(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`);
    try {
      const request = await fetch(
        `${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();
      console.log(json);

      setTimeout(() => {
        setWeather({ ...json });
      }, 2000);

    } catch (e) {
      console.error(e)
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className=" flex justify-center">
      <WeatherSearch className=""
                     onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
}

export default WeatherData;
