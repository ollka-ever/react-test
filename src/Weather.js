import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [temp, setTemp] = useState();
  function showWeather(response) {
    setTemp(Math.round(response.data.main.temp));
  }

  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=Sumy&appid=616b6d14eb70524f242eb75242106f0a&units=metric"
    )
    .then(showWeather);

  return (
    <div>
      <h2>Temperature in Sumy is {temp}</h2>
    </div>
  );
}
