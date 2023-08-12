import React from "react";

//create your first component
const Footer = (props) => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand footer text-white" href="#">Copywright © 2023</p>
            </div>
        </nav>
	);
};

export default Footer;
