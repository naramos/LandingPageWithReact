import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

export function Home() {
	return (
		<div>
			<Navbar />

			<Jumbotron />

			<div className="container">
				<div className="row">
					<div className="col mb-4">
						<Card />
					</div>
					<div className="col mb-4">
						<Card />
					</div>
					<div className="col mb-4">
						<Card />
					</div>
					<div className="col mb-4">
						<Card />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
