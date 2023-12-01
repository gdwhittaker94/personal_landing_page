import React from 'react';
// Images
import person1 from "../img/person1.jpg"
import person2 from "../img/person2.jpg"
import person3 from "../img/person3.jpg"

export default function Testimonials() {
	return (
		<section className="bg-light pt-4 pb-2" id="testimonials">
			<div className="text-center px-3">
				<h2 className="fw-bold underline">Testimonials</h2>
				<h5>Read what these people have to say about my work:</h5>
			</div>
			{/* <!-- Carousel --> */}
			<div
				id="carouselTestimonials"
				className="carousel slide mx-4 mx-md-auto mt-5"
			>
				<div className="carousel-inner">
					{/* <!-- Slide1 --> */}
					<div className="carousel-item active rounded-5 px-2 px-sm-5 py-4 testimonialBG border border-3 border-black">
						<div className="container d-flex flex-column align-items-center justify-content-center">
							<img
								src={person1}
								alt="Mark"
								className="rounded-circle testimonialImg mb-4"
							/>
							<p className="w-75 text-center text-white fst-italic mb-4">
								"Lorem, ipsum dolor sit amet consectetur adipisicing
								elit. Ullam, blanditiis aliquam repellat
								necessitatibus aliquid accusantium eius suscipit in
								recusandae modi ut tempora est asperiores eum?"
							</p>
							<div className="text-center text-danger-emphasis fw-bold testimonialInfo">
								<p>
									- Mark -
									<br />
									Project Manager at Web Development^
								</p>
							</div>
						</div>
					</div>
					{/* <!-- Slide2 --> */}
					<div className="carousel-item rounded-5 px-2 px-sm-5 py-4 testimonialBG border border-3 border-black">
						<div className="container d-flex flex-column align-items-center justify-content-center">
							<img
								src={person2}
								alt="Stacy"
								className="rounded-circle testimonialImg mb-4"
							/>
							<p className="w-75 text-center text-white fst-italic mb-4">
								"Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Alias aspernatur soluta facere, expedita placeat
								velit nostrum veritatis aliquid, dignissimos ea
								exercitationem totam cum! Adipisci, maxime!"
							</p>
							<div className="text-center text-danger-emphasis fw-bold testimonialInfo">
								<p>
									- Stacy -
									<br />
									App Development at Media Party
								</p>
							</div>
						</div>
					</div>
					{/* <!-- Slide3 --> */}
					<div className="carousel-item rounded-5 px-2 px-sm-5 py-4 testimonialBG border border-3 border-black">
						<div className="container d-flex flex-column align-items-center justify-content-center">
							<img
								src={person3}
								alt="Bruno"
								className="rounded-circle testimonialImg mb-4"
							/>
							<p className="w-75 text-center text-white fst-italic mb-4">
								"Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Expedita omnis nemo cumque blanditiis,
								recusandae nobis quae maxime, nihil exercitationem
								reiciendis itaque, provident eum quod facere."
							</p>
							<div className="text-center text-danger-emphasis fw-bold testimonialInfo">
								<p>
									- Bruno -
									<br />
									Developer Wizard at Hogwarts
								</p>
							</div>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselTestimonials"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselTestimonials"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</section>
	);
}
