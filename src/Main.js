import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Main.css";

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
			temp: response.data.main.temp,
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: response.data.wind.speed,
		});
	}
	if (weatherData.ready) {
		return (
			<div className="main">
				<form onClick={handleSubmit}>
					<input type="text" placeholder="Change City" onChange={updateCity} />
					<input button="submit" value="Go" />
					<input button="submit" value="Current" />
				</form>
				<h1>{city}</h1>
				<div className="row">
					<div className="col">
						<WeatherInfo data={weatherData} />
					</div>
					<div className="col">
						<ul>
							<li>Time</li>
							<li>date</li>
							<li>day</li>
						</ul>
					</div>
				</div>
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
