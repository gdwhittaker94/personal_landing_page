import React from 'react';

export default function Experience() {
	return (
		<section className="bg-light text-black" id="experience">
			<div className="container-fluid container-md text-center">
				<div className="row py-4 d-flex justify-content-center justify-content-lg-between">
					{/*  Web Dev  */}
					<h2 className="mb-4 fw-bold underline">My Experience</h2>
					<div className="col-10 col-md-4 border border-1 p-4 dark-container">
						<i className="bi bi-laptop fs-1 text-primary"></i>
						<h2 className="fw-bold">Web Development</h2>
						<p>
							Su es tuvo lo hora diga lila tras come. Tu heroe daban
							la lo se libro. Por por solo este come lune esto sala
							una. Nos iba reinaba ceguera verdura una los. Llaman
							crespo trajes fue balcon fue. Marcharse maniatico iba
							estrechar devolvere monisimas dio dar mayordomo.{' '}
						</p>
						<div className="d-flex justify-content-center flex-wrap gap-3 fs-5 mb-4">
							<span-badge className="badge text-bg-primary p-2">
								HTML
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								CSS
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								JavaScript
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								Bootstrap
							</span-badge>
						</div>
					</div>
					{/* Articles */}
					<div className="col-10 col-md-4 mt-4 mt-md-0 border border-1 p-4 dark-container">
						<i className="bi bi-newspaper fs-1 text-primary"></i>
						<h2 className="fw-bold">Articles</h2>
						<p>
							Su es tuvo lo hora diga lila tras come. Tu heroe daban
							la lo se libro. Por por solo este come lune esto sala
							una. Nos iba reinaba ceguera verdura una los. Llaman
							crespo trajes fue balcon fue. Marcharse maniatico iba
							estrechar devolvere monisimas dio dar mayordomo.{' '}
						</p>
						<div className="d-flex justify-content-center flex-wrap gap-3 fs-5 mb-4">
							<span-badge className="badge text-bg-primary p-2">
								Writing
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								Editing
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								Blogs
							</span-badge>
						</div>
					</div>
					{/* Studies */}
					<div className="col-10 col-md-4 mt-4 mt-md-0 border border-1 p-4 dark-container">
						<i className="bi bi-journal-code fs-1 text-primary"></i>
						<h2 className="fw-bold">Studies</h2>
						<p>
							Su es tuvo lo hora diga lila tras come. Tu heroe daban
							la lo se libro. Por por solo este come lune esto sala
							una. Nos iba reinaba ceguera verdura una los. Llaman
							crespo trajes fue balcon fue. Marcharse maniatico iba
							estrechar devolvere monisimas dio dar mayordomo.{' '}
						</p>
						<div className="d-flex justify-content-center flex-wrap gap-3 fs-5 mb-4">
							<span-badge className="badge text-bg-primary p-2">
								4Geeks
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								META
							</span-badge>
							<span-badge className="badge text-bg-primary p-2">
								Udemy
							</span-badge>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
