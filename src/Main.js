import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
			temp: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
			coordinates: response.data.coord,
			date: new Date(response.data.dt * 1000),
			icon: response.data.weather[0].id,
		});
	}
	if (weatherData.ready) {
		return (
			<div className="main">
				<input type="button" value="Current Location" />
				<form onClick={handleSubmit}>
					<input type="text" placeholder="Change City" onChange={updateCity} />
					<input type="submit" value="Search" />
				</form>
				<FontAwesomeIcon
					icon={faLocationDot}
					bounce
					size="lg"
					style={{ color: "#00cccb" }}
				/>
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					shake
					size="xl"
					style={{ color: "#00cccb" }}
				/>
				<WeatherInfo data={weatherData} />
				<Forecast />
			</div>
		);
	} else {
		search();
		return "Loading...";
	}
}
