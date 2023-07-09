import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Charri");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8774ebbe1bf698f625225e6c0d83e544`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">Please give valid cityName</p>
        ) : (
          <div>
            <div className="info/">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°celsius </h1>
              <h3 className="tempmin_max">Min={city.temp_min}°cel | Max= {city.temp_max}°cel</h3>
            </div>

            <div className="wave-one"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
