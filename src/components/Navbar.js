import React from 'react';
import bslogo from "../img/bootstrap_logo.png"

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-light p-2">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbar-toggler"
					aria-controls="navbar-toggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-md-flex justify-content-between align-items-center"
					id="navbar-toggler"
				>
					<a
						className="navbar-brand d-none d-md-block"
						href="#"
						aria-current="page"
					>
						<img
							src={bslogo}
							alt="Bootstrap Icon"
							width="50"
						/>
					</a>
					<ul className="navbar-nav d-flex justify-content-center align-items-center">
						<li className="nav-item">
							<a className="nav-link" href="./AboutMe.js/#about">
								About Me
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./Experience.js/#experience">
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./Projects.js/#projects">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./Articles.js/#articles">
								Articles
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./Testimonials.js/#testimonials">
								Testimonials
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="./Contact.js/#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
