import React from "react";
import Date from "./Date";

export default function WeatherInfo(props) {
	return (
		<div className="weatherInfo">
			<h1>{props.data.city}</h1>
			<h2>{props.data.temp} °C</h2>
			<ul>
				<li>{props.data.description}</li>
				<li>{props.data.humidity}%</li>
				<li>{props.data.wind} Km/h</li>
			</ul>
			<Date date={props.data.date} />
		</div>
	);
}
