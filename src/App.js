import React from "react";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
	return (
		<div className="App container">
			<Main defaultCity="London" />
			<Footer />
		</div>
	);
}
