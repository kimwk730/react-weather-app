import React from "react";

export default function Forecast() {
	return (
		<div className="forecastWeek row">
			<div className="forecastDay col">
				<div>Mon</div>
				<div>icon</div>
				<span>MaxTemp°C</span>
				<span>MinTemp°C</span>
			</div>
		</div>
	);
}
