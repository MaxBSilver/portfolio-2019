import React, { Component } from 'react';
import Header from '../Header/Header';
import notebook from '../../assets/notebook-img.png';
import typewriter from '../../assets/typewriter-img.png';
import phone from '../../assets/phone-img.png';

// import about2 from '../../assets/ravno.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faSass, faVuejs, faAmazon, faGithub, faLess } from '@fortawesome/free-brands-svg-icons';
export class About extends Component {
	render () {
		return (
			<div className="about-container">
				<Header componentName={'About'}> </Header>
				<section className="about-section abt-sec-1">
					{/* <div><img src={notebook} alt="Portfolio icon" /></div> */}
					<div>
						<div>
							<img src={notebook} alt="Portfolio icon" />
							<h6>Who am I?</h6>
						</div>
						<p>
							I'm a web designer / developer based in Denver, Colorado. I have a passion for web design and love to
							create for web and mobile devices. I hold a Bachelor's of Science from the University of South Florida and
							graduated from the Turing School of Software and Design front-end program.
						</p>
					</div>
				</section>
				<section className="about-section abt-sec-1 abt-sec-3">
					<div>
						<div>
							<img src={phone} alt="Portfolio icon" />
							<h6>My Focus</h6>
						</div>
						<p>
							I believe simple is better. I enjoy making applications that are clean and intuitive at first touch. I am a strong advocate for test-driven development.
						</p>
					</div>
				</section>
				<section className="about-section abt-sec-1 abt-sec-2">
					<div>
						<div>
							<img src={typewriter} alt="Portfolio icon" />
							<h6>My Technology</h6>
						</div>
						<p>
							Mainly working with JavaScript, I'm highly proficient with most front-end frameworks including React.js,
							React Native, and Vue.js. I also have experience working with and building API's with Node.js and Express. I believe in test-driven development and test all my applications with Jest/Enzyme, Supertest, or Mocha/Chai.
						</p>
						{/* <div className="icon-container"> */}
							{/* <img src={about2} alt="about icon" /> */}
							{/* <FontAwesomeIcon className="react" icon={faReact} />
							<FontAwesomeIcon className="vue" icon={faVuejs} />
							<FontAwesomeIcon className="sass" icon={faSass} />
							<FontAwesomeIcon className="less" icon={faLess} />
							<FontAwesomeIcon className="node" icon={faNodeJs} />
							<FontAwesomeIcon className="github" icon={faGithub} />
							<FontAwesomeIcon className="amazon" icon={faAmazon} />
						</div> */}
					</div>
				</section>
			</div>
		);
	}
}

export default About;
