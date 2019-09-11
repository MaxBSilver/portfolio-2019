import React, { Component } from 'react';
import Typed from 'typed.js';
import background from '../../assets/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export class Main extends Component {

	componentDidMount () {
		const options = {
			strings: [ 'React.', 'React Native.', 'Vue.', 'Node.', 'PostGreSQL.' ],
			typeSpeed: 80,
			backSpeed: 60,
			loop: true
		};
		this.typed = new Typed(this.el, options);
	}

	render () {
		return (
			<main>
				<div className="main-parent-container">
					<section className="info-container image-container" style={{ backgroundImage: `url(${background})` }}>
						<section>
							<h2>Hi! I'm Max.</h2>
							<span>
								I build applications <br /> with{' '}
								<span
									style={{ whiteSpace: 'pre' }}
									ref={el => {
										this.el = el;
									}}
								/>
							</span>
							<p>
								I'm a developer primarily leveraging JavaScript to creatively build dynamic applications that are both responsive
								and intuitive.
							</p>
							<div>
								<a href="https://github.com/MaxBSilver" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faGithubSquare} />
								</a>
								<a href="https://www.linkedin.com/in/max-b-silver/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a href="https://www.linkedin.com/in/max-b-silver/" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</div>
						</section>
					
					</section>
					{/* <section className="image-container" style={{ backgroundImage: `url(${background})` }} /> */}
				</div>
			</main>
		);
	}
}

export default Main;
