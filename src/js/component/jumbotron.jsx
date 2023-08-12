import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<p>It uses utility for typography and spacing to space content out within the larger container.</p>
			<p className="lead">
				<a className="btn btn-dark btn-lg" href="#" role="button">Learn more</a>
			</p>
		</div>
	);
};

export default Jumbotron;
