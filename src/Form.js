import React, { useState } from "react";
import axios from "axios";

export default function Form() {
	const [city, setCity] = useState(null);
	const [result, setResult] = useState(null);

	function fetchData(response) {
		setResult(
			<ul>
				<li>City: {response.data.name}</li>
				<li>Temperature: {Math.round(response.data.main.temp)}°C</li>
				<li>Description: {response.data.weather[0].description}</li>
				<li>Humidity: {response.data.main.humidity}%</li>
				<li>Wind Speed: {Math.round(response.data.wind.speed)}km/h</li>
			</ul>
		);
	}

	function handleFormSubmission(e) {
		e.preventDefault();
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9eca7aac0b071aa16e3cb063adba0785&units=metric`;
		axios.get(url).then(fetchData);
	}

	function passTypedCity(e) {
		e.preventDefault();
		setCity(e.target.value);
	}

	return (
		<div>
			<form onSubmit={handleFormSubmission}>
				<input
					type="search"
					placeholder="Type a city.."
					onChange={passTypedCity}
				/>
				<input type="submit" />
			</form>
			{result}
		</div>
	);
}
