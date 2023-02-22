import { useRef } from "react";
import "./Navbar.scss";
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<p className="logo">LOGO</p>
			<nav ref={navRef}>
				<a href="/">Home</a>
				<div class="dropdown">
  					<a class="dropbtn">Our Services</a>
  					<div class="dropdown-content">
    					<a href="#">Link 1</a>
    					<a href="#">Link 2</a>
    					<a href="#">Link 3</a>
  					</div>
				</div>
				<a href="/register">Register</a>
				<a href="/login">Login</a>
				<a href="/#">About Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
                        <Icon.X />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
                <Icon.List />
			</button>
		</header>
	);
}

export default Navbar;