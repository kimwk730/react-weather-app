import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
	const [loaded, setLoaded] = useState(false);
	const [forecast, setForecast] = useState(null);

	useEffect(() => {
		setLoaded(false);
	}, [props.coordinates]);

	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		return (
			<div className="row">
				{forecast.map(function (dailyForecast, index) {
					if (index < 5) {
						return (
							<div className="col" key={index}>
								<ForecastDay data={dailyForecast} />
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	} else {
		let longitude = props.coordinates.lon;
		let latitude = props.coordinates.lat;
		let apiKey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;

		axios.get(apiUrl).then(handleResponse);
	}
}
