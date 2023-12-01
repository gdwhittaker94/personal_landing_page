import React from 'react';
// Images
import homeSetup from "../img/home_setup.jpg"
import code from "../img/code.jpg"
import gym from "../img/gym.jpg"
import website from "../img/website.jpg"
import holdingPhone from "../img/holding_phone.jpg"
import typingOnKeyboard from "../img/typing_on_keyboard.jpg"

export default function Projects() {

	return (
		<section
			className="d-flex flex-column p-4 text-center bg-light"
			id="projects"
		>
			<h2 className="fw-bold underline">My Projects</h2>
			<h5>Here is some of my recent work:</h5>
			{/* <!-- Project Gallery --> */}
			<div className="container text-center mt-4">
				<div className="row g-4">
					{/* <!-- QUADRANT1 --> */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="position-relative quadrant">
							{/* <!-- Img --> */}
							<img
								className="img-fluid rounded-1"
								src={homeSetup}
								alt="Project 1"
							/>
							{/* <!-- Overlay Text --> */}
							<div className="position-absolute top-50 start-50 translate-middle text-black w-100 overlay">
								<p className="fs-3 fw-bold">Project 1</p>
								{/* <!-- Link Icons --> */}
								<div className="d-flex justify-content-center">
									<a
										href="https://github.com/"
										target="_blank"
										className="me-4"
									>
										<i
											className="bi bi-github text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
									<a href="https://example.com/" target="_blank">
										<i
											className="bi bi-arrow-up-right-square text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- QUADRANT2 --> */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="position-relative quadrant">
							{/* <!-- Img --> */}
							<img
								className="img-fluid rounded-1"
								src={code}
								alt="Project 1"
							/>
							{/* <!-- Overlay Text --> */}
							<div className="position-absolute top-50 start-50 translate-middle text-black w-100 overlay">
								<p className="fs-3 fw-bold">Project 2</p>
								{/* <!-- Link Icons --> */}
								<div className="d-flex justify-content-center">
									<a
										href="https://github.com/"
										target="_blank"
										className="me-4"
									>
										<i
											className="bi bi-github text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
									<a href="https://example.com/" target="_blank">
										<i
											className="bi bi-arrow-up-right-square text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- QUADRANT3 --> */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="position-relative quadrant">
							{/* <!-- Img --> */}
							<img
								className="img-fluid rounded-1"
								src={gym}
								alt="Project 1"
							/>
							{/* <!-- Overlay Text --> */}
							<div className="position-absolute top-50 start-50 translate-middle text-black w-100 overlay">
								<p className="fs-3 fw-bold">Project 3</p>
								{/* <!-- Link Icons --> */}
								<div className="d-flex justify-content-center">
									<a
										href="https://github.com/"
										target="_blank"
										className="me-4"
									>
										<i
											className="bi bi-github text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
									<a href="https://example.com/" target="_blank">
										<i
											className="bi bi-arrow-up-right-square text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- QUADRANT4 --> */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="position-relative quadrant">
							{/* <!-- Img --> */}
							<img
								className="img-fluid rounded-1"
								src={website}
								alt="Project 1"
							/>
							{/* <!-- Overlay Text --> */}
							<div className="position-absolute top-50 start-50 translate-middle text-black w-100 overlay">
								<p className="fs-3 fw-bold">Project 4</p>
								{/* <!-- Link Icons --> */}
								<div className="d-flex justify-content-center">
									<a
										href="https://github.com/"
										target="_blank"
										className="me-4"
									>
										<i
											className="bi bi-github text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
									<a href="https://example.com/" target="_blank">
										<i
											className="bi bi-arrow-up-right-square text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- QUADRANT5 --> */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="position-relative quadrant">
							{/* <!-- Img --> */}
							<img
								className="img-fluid rounded-1"
								src={holdingPhone}
								alt="Project 1"
							/>
							{/* <!-- Overlay Text --> */}
							<div className="position-absolute top-50 start-50 translate-middle text-black w-100 overlay">
								<p className="fs-3 fw-bold">Project 5</p>
								{/* <!-- Link Icons --> */}
								<div className="d-flex justify-content-center">
									<a
										href="https://github.com/"
										target="_blank"
										className="me-4"
									>
										<i
											className="bi bi-github text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
									<a href="https://example.com/" target="_blank">
										<i
											className="bi bi-arrow-up-right-square text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- QUADRANT6 --> */}
					<div className="col-12 col-md-6 col-lg-4">
						<div className="position-relative quadrant">
							{/* <!-- Img --> */}
							<img
								className="img-fluid rounded-1"
								src={typingOnKeyboard}
								alt="Project 1"
							/>
							{/* <!-- Overlay Text --> */}
							<div className="position-absolute top-50 start-50 translate-middle text-black w-100 overlay">
								<p className="fs-3 fw-bold">Project 6</p>
								{/* <!-- Link Icons --> */}
								<div className="d-flex justify-content-center">
									<a
										href="https://github.com/"
										target="_blank"
										className="me-4"
									>
										<i
											className="bi bi-github text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
									<a href="https://example.com/" target="_blank">
										<i
											className="bi bi-arrow-up-right-square text-black"
											style={{ fontSize: "50px" }}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col">
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button type="button" className="btn btn-info fw-bold">
								View More Projects
								<i className="bi bi-arrow-right-circle-fill my-3"></i>
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
