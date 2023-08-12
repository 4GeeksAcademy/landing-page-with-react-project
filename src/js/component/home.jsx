import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
		</div>
	);
};

export default Home;
