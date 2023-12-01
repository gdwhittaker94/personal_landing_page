import React from 'react';
import joseBloggs from "../img/random_man.jpg"

export default function Hero() {
	return (
		<section className="container-fluid p-4 bg-light">
			<div className="row d-flex justify-content-center">
				<div className="col-8 col-md-5 col-xl-3 my-4">
					<img
						src={joseBloggs}
						alt="A headshot of a random, well dressed man"
						className="img-fluid rounded-circle border border-dark border-3 heroImg"
					/>
				</div>
				<div className="row">
					<h1 className="text-center fs-2 mb-2">
						Hi! I'm José Bloggs
					</h1>
					<h1 className="text-body-secondary text-center fs-4 mb-4">
						{' '}
						- I develop webpages and write blogs about programming -{' '}
					</h1>
				</div>
				{/* <div className="row d-flex justify-content-center mb-4">
        <img src="./img/frontend_img.jpg" alt="Illustration of man surrounded by frontend developer icons" className="col-10 col-md-5 col-xl-3 img-fluid rounded-pill">
      </div> */}
			</div>
		</section>
	);
}
