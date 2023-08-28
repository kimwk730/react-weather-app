import React, { useState } from "react";

export default function Temp(props) {
	const [temp, setTemp] = useState(props.celsius);
	const [unit, setUnit] = useState("celsius");

	function convertToFah(e) {
		e.preventDefault();
		setTemp(Math.round((props.celsius * 9) / 5 + 32));
		setUnit("fahrenheit");
	}
	function convertToCel(e) {
		e.preventDefault();
		setUnit("celsius");
	}

	if (unit === "celsius") {
		return (
			<h2>
				{props.celsius}
				<small>
					<a href="/" class="text-decoration-none" onClick={convertToFah}>
						°C
					</a>
				</small>
			</h2>
		);
	} else {
		return (
			<h2>
				{temp}
				<small>
					<a href="/" class="text-decoration-none" onClick={convertToCel}>
						°F
					</a>
				</small>
			</h2>
		);
	}
}
