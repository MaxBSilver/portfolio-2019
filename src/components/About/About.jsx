import React, { Component } from 'react';
import Header from '../Header/Header';
import about from '../../assets/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faSass, faVuejs, faAmazon, faGithub, faLess } from '@fortawesome/free-brands-svg-icons';
export class About extends Component {
	render () {
		return (
			<div className="about-container">
				<Header componentName={'About'}> </Header>
				<section className="about-section abt-sec-1">
					<div>
						<img src={about} alt="Portfolio icon" />
					</div>
					<div>
						<h6>Who am I?</h6>
						<p>
							I'm a web designer / developer based in Denver, Colorado. I have a passion for web design and love to
							create for web and mobile devices.
						</p>
					</div>
				</section>
				<section className="about-section abt-sec-2">
					<h6>My Technologies</h6>
					<div>
						<p>Mainly working with JavaScript, I'm highly proficient with most frameworks including React.js, React Native, Vue.js, and Angular. I have worked with Node.js and Java on the backend and SQL and Redis for data basing.</p>
						<div className="icon-container">
							<FontAwesomeIcon className="react" icon={faReact} />
							<FontAwesomeIcon className="node" icon={faNodeJs} />
							<FontAwesomeIcon className="vue" icon={faVuejs} />
							<FontAwesomeIcon className="sass" icon={faSass} />
							<FontAwesomeIcon className="less" icon={faLess} />
							<FontAwesomeIcon className="github" icon={faGithub} />
							{/* <FontAwesomeIcon className="amazon" icon={faAmazon} /> */}
						</div>
					</div>
				</section>
				<section className="about-section abt-sec-3">
					<h6>Who am I?</h6>
					<p>
						I'm a web designer / developer based in Denver, Colorado. I have a passion for web design and love to create
						for web and mobile devices.
					</p>
				</section>
			</div>
		);
	}
}

export default About;
