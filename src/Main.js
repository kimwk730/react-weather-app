import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Main(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ ready: false });

	function updateCity(e) {
		setCity(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		search();
	}

	function search() {
		const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			city: response.data.name,
			temp: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
			coordinates: response.data.coord,
			date: new Date(response.data.dt * 1000),
			icon: response.data.weather[0].icon,
		});
	}
	if (weatherData.ready) {
		return (
			<div className="main">
				<form onClick={handleSubmit}>
					<input button="submit" value="current location" />
					<input type="text" placeholder="Change City" onChange={updateCity} />
					<input button="submit" value="Search" />
				</form>
				<WeatherInfo data={weatherData} />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
