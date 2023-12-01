import React from 'react';

export default function Contact() {
	return (
		<section className="bg-light py-5 contactSection" id="contact">
			<div className="container w-75 contactContainer">
				<div className="container text-center text-white bg-primary p-5 rounded-4 contactShadow">
					<div className="row d-flex align-items-center">
						<div className="col-12 col-md-4 mb-4 mb-md-0 fw-bold fs-2 contactCTA">
							Let's get in touch!
						</div>
						<div className="col-12 col-md-4 mb-4 mb-md-0 fw-bold">
							Want to build something awesome on the web?
							<br />
							I'm your man!
						</div>
						<div className="col-12 col-md-4">
							<button
								type="button"
								className="fw-bold btn btn-light contactBtn p-3"
							>
								<a
									href="mailto:josebloggs@myemail.com"
									target="_blank"
									className="contactLink"
								>
									Contact
									<i className="bi bi-envelope-at-fill"></i>
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
