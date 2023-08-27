import React, { useState } from "react";

export default function Temp(props) {
	const [temp, setTemp] = useState(props.celsius);
	const [unit, setUnit] = useState("°C");

	function handleClick(e) {
		e.preventDefault();
		setUnit("°F");
		setTemp(Math.round((props.celsius * 9) / 5 + 32));
	}

	// if ({ unit } === "°C") setUnit("°F");
	// setTemp(Math.round((props.celsius * 9) / 5 + 32));
	// if ({ unit } === "°F") setUnit("°C");
	// setTemp(props.celsius);

	return (
		<h2>
			{temp}
			<small>
				<a href="/#" onClick={handleClick}>
					{unit}
				</a>
			</small>
		</h2>
	);
}
