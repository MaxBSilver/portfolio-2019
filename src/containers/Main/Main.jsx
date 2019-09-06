import React, { Component } from 'react';
import LrgButton from '../../components/LrgBtn/LrgBtn';

import Landscape from '../../assets/119.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
						<section className="icon-container">
							<i class="fab fa-github-square" />
							2 3
						</section>
						<section className="main-btn-cntr">
							<img src={Landscape} alt="background landscape, green field with dark green trees" />
						</section>
					</div>
				</div>
			</main>
		);
	}
}

export default Main;
