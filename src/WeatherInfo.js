import React from "react";
import Temp from "./Temp";
import Icon from "./Icon";
import Date from "./Date";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
	return (
		<div className="weatherInfo">
			<h1>{props.data.city}</h1>
			<div className="row">
				<div className="col-sm align-self-center">
					<ul>
						<li class="text-capitalize">{props.data.description}</li>
						<li>Humidity: {props.data.humidity}%</li>
						<li>Wind Speed: {props.data.wind} Km/h</li>
						<li>
							<Date date={props.data.date} />
						</li>
					</ul>
				</div>
				<div className="col-sm">
					<Icon weatherId={props.data.icon} />
				</div>
				<div className="col-sm">
					<Temp celsius={props.data.temp} />
				</div>
			</div>
		</div>
	);
}
