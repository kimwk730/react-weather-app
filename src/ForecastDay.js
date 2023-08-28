import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[day];
	}
	return (
		<div className="forecastDay">
			<div>{day()}</div>
			<Icon weatherId={props.data.weather[0].id} />
			<div>
				<span>{Math.round(props.data.temp.max)}°C</span> |{" "}
				<span>{Math.round(props.data.temp.min)}°C</span>
			</div>
		</div>
	);
}
