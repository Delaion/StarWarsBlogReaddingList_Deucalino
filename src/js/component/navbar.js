import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">	
				<button type="button" className="btn btn-p-0">
					<img src="https://i.pinimg.com/564x/ac/44/71/ac4471f4672263c27c4dbe87da598dd2.jpg" className=" img-fluid rounded-5 w-25 h-25" alt="..."/>
				</button>	
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<button type="button" className="btn btn-outline-warning text-dark w-85 h-50">       My Favorities </button>
				</Link>
			</div>
		</nav>
	);
};
