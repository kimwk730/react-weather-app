import React from "react";
import Temp from "./Temp";
import Icon from "./Icon";
import Date from "./Date";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="weatherInfo">
			<h1>{props.data.city}</h1>
			<Temp celsius={props.data.temp} />
			<Icon weatherId={props.data.icon} />
			<ul>
				<li>{props.data.description}</li>
				<li>{props.data.humidity}%</li>
				<li>{props.data.wind} Km/h</li>
			</ul>
			<Date date={props.data.date} />
		</div>
	);
}
