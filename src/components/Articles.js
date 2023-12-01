import React from 'react';

export default function Articles() {
	return (
		<section className="bg-light py-4" id="articles">
			<h2 className="text-center fw-bold underline">Articles</h2>
			<div className="card w-75 mx-auto mt-4 articles-container">
				<div className="card-header fw-bold">Featured</div>
				<ul className="list-group list-group-flush">
					<a
						href="https://www.freecodecamp.org/news"
						target="_blank"
						rel="noopener noreferrer"
					>
						<li className="list-group-item articleEffect">
							How to Find Good First Issues on Github
						</li>
						<li className="list-group-item articleEffect">
							How to Build a JavaScript Utility Library like Lodash
						</li>
						<li className="list-group-item articleEffect">
							How to Add ESLint to Your React Project
						</li>
						<li className="list-group-item articleEffect">
							How to Use Web APIs in Your Coding Projects
						</li>
						<li className="list-group-item articleEffect">
							How to Set Up Application Performance Monitoring for
							Node.js Applications Using Elastic
						</li>
						<li className="list-group-item articleEffect">
							How to Perform CRUD Operations – JavaScript and SQL
							Example
						</li>
					</a>
				</ul>
			</div>
			<div className="w-75 mx-auto d-flex justify-content-center mt-4">
				<a
					href="https://www.freecodecamp.org/news"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button type="button" className="btn btn-info fw-bold">
						View More Articles
						<i className="bi bi-arrow-right-circle-fill my-3"></i>
					</button>
				</a>
			</div>
		</section>
	);
}
