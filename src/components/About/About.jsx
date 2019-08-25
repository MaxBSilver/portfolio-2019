import React, { Component } from 'react';
import Header from '../Header/Header';
import portfolio from '../../assets/envio-19.jpg';
export class About extends Component {
	render () {
		return (
			<div className="about-container">
				<Header componentName={'About'}> </Header>
				<section className="about-section abt-sec-1">
					<img src={portfolio} alt="Portfolio icon" />
          <p>filler dsjkafgjkdsjkgjkajksn  dasjkfgdjksagdkjdsjka djskgjkdasjkgjkasjkgd jkdsgjkadskjgkjadsgkj</p>
				</section>
				<section className="about-section abt-sec-2">b</section>
				<section className="about-section abt-sec-3">c</section>
			</div>
		);
	}
}

export default About;
