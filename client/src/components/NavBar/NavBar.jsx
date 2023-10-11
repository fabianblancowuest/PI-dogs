import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo-4.jpg";

const NavBar = () => {
	return (
		<div className="nav-container">
			<div className="principal-buttons">
				<div className="nav-logo">
					<NavLink
						className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
						to="/"
					>
						<img src={logo} alt="logo"></img>
					</NavLink>
				</div>
				<div className="nav-navigation"></div>
				<NavLink
					className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
					to="/home"
				>
					<h2>Home</h2>
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
					to="/detail"
				>
					<h2>Detail</h2>
				</NavLink>

				<NavLink
					to="/create"
					className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
				>
					<h2>Create</h2>
				</NavLink>
			</div>
		</div>
	);
};

export default NavBar;
