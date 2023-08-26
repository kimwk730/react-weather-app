import React from "react";

export default function WeatherInfo(props) {
	return (
		<ul>
			<li>{props.data.temp}</li>
			<li>{props.data.description}</li>
			<li>{props.data.humidity}</li>
			<li>{props.data.wind}</li>
		</ul>
	);
}
