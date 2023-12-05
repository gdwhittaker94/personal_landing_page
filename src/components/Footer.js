import React from 'react';
import bslogo from "../img/bootstrap_logo.png"

export default function Footer() {
	return (
		<footer className="bg-dark d-flex flex-column align-items-center justify-content-center py-4 text-white fw-bolder">
			<img
				src={bslogo}
				alt="Bootstrap logo"
				className="img-fluid mb-3 bootstrapFooter"
			/>
			<p className="text-center mb-1">I learn and create everyday. </p>
			<p className="mb-4">Let's create a project together!</p>
			<div className="d-flex flex-wrap align-items-center justify-content-center row-gap-3">
				{/* <!-- Twitter --> */}
				<a
					href="https://twitter.com/?lang=es"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-3 iconsFooter"
				>
					<i className="bi bi-twitter fs-4"></i>
				</a>
				{/* <!-- Github --> */}
				<a
					href="https://github.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-3 iconsFooter"
				>
					<i className="bi bi-github fs-4"></i>
				</a>
				{/* <!-- LinkedIn --> */}
				<a
					href="https://www.linkedin.com/feed/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-3 iconsFooter"
				>
					<i className="bi bi-linkedin fs-4"></i>
				</a>
				{/* <!-- Instagram --> */}
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-3 iconsFooter"
				>
					<i className="bi bi-instagram fs-4"></i>
				</a>
				{/* <!-- Email --> */}
				<a
					href="mailto:josebloggs@myemail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-3 iconsFooter"
				>
					<i className="bi bi-envelope fs-4"></i>
				</a>
			</div>
			<div className="my-4 text-light copyright">
				Created by José Bloggs (2023) &#169;
			</div>
		</footer>
	);
}
