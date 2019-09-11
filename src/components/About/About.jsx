import React, { Component } from 'react';
import Header from '../Header/Header';
import about from '../../assets/about.png';
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
					<h6>Who am I?</h6>
					<p>
						I'm a web designer / developer based in Denver, Colorado. I have a passion for web design and love to create
						for web and mobile devices.
					</p>
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
