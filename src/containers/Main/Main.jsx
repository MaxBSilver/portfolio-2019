import React, { Component } from 'react';
import LrgButton from '../../components/LrgBtn/LrgBtn';
export class Main extends Component {
	render () {
		return (
			<main>
				<div className="main-parent-container">
					<div className="main-top">
						<h1>I'm Max</h1>
					</div>
					<div className="main-bottom">
						<h2>a software engineer</h2>
						<section className="main-btn-cntr">
							<LrgButton btnName={'About'} />
							<LrgButton btnName={'Projects'} />
							<LrgButton btnName={'Notes'} />
						</section>
					</div>
				</div>
			</main>
		);
	}
}

export default Main;
