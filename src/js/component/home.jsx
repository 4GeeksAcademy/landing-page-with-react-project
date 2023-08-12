import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container d-flex">
				<Card title="First Card"/>
				<Card title="Second Card"/>
				<Card title="Third Card"/>
				<Card title="Fourth Card"/>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
