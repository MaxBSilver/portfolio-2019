import React, { Component } from 'react';
import LrgButton from '../../components/LrgBtn/LrgBtn';

import background from '../../assets/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class Main extends Component {
	render () {
		return (
			<main>
				<div className="main-parent-container">
					<section className="info-container">
						<h1>I'm Max</h1>
						<h2>a software engineer</h2>
						<a href="https://github.com/MaxBSilver" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faGithubSquare} />
						</a>
						<a href="https://www.linkedin.com/in/max-b-silver/" target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
						<FontAwesomeIcon icon={faEnvelope} />
					</section>
					<section className="image-container">
						<img src={background} alt="background landscape, green field with dark green trees" />
					</section>
					{/* <section className="info-container">
		
							<section className="icon-container">
								<a href="https://github.com/MaxBSilver" target="_blank" rel="noopener noreferrer" >
									<FontAwesomeIcon icon={faGithubSquare} />
								</a>
								<a href="https://www.linkedin.com/in/max-b-silver/" target="_blank" rel="noopener noreferrer" >
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<FontAwesomeIcon icon={faEnvelope} />
							</section>
						</section>
						<section className="main-btn-cntr" />
						<img src={background} alt="background landscape, green field with dark green trees" /> */}
				</div>
			</main>
		);
	}
}

export default Main;
