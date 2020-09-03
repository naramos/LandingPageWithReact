import React from "react";

const Card = () => {
	return (
		<div className="col mb-4 text-center">
			<div className="card h-100">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content.
					</p>
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;