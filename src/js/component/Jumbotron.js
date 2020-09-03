import React from "react";

const Jumbotron = () => {
	return (
		<div className="container">
			<div className="jumbotron mt-2">
				<h1 className="display-4 font-weight-bold">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg ml-5"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
