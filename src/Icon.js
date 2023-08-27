import React from "react";
import sun from "./images/sun.gif";
import partlycoudy from "./images/partlycloudy.gif";
import cloudy from "./images/cloudy.gif";
import foggy from "./images/foggy.gif";
import snow from "./images/snow.gif";
import storm from "./images/storm.gif";
import drizzle from "./images/drizzle.gif";
import rain from "./images/rain.gif";

export default function Icon(props) {
	const weatherId = props.weatherId;

	if (weatherId === 800) {
		return <img src={sun} alt="sun" />;
	} else if (weatherId === 801 || weatherId === 802) {
		return <img src={partlycoudy} alt="partlycloudy" />;
	} else if (weatherId === 803 || weatherId === 804) {
		return <img src={cloudy} alt="cloudy" />;
	} else if (weatherId >= 700 && weatherId < 799) {
		return <img src={foggy} alt="foggy" />;
	} else if (weatherId >= 600 && weatherId < 699) {
		return <img src={snow} alt="snow" />;
	} else if (weatherId >= 200 && weatherId < 299) {
		return <img src={storm} alt="storm" />;
	} else if (weatherId >= 300 && weatherId < 399) {
		return <img src={drizzle} alt="drizzle " />;
	} else if (weatherId >= 500 && weatherId < 599) {
		return <img src={rain} alt="rain" />;
	}
}
