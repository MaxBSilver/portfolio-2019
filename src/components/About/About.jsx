import React, { Component } from 'react';
import Header from '../Header/Header';
import coding from '../../assets/codingisometric-2.png';
export class About extends Component {
	render () {
		return (
			<div className="about-container">
				<Header componentName={'About'}> </Header>
				<section className="about-section abt-sec-1">
					<div>
						<img src={coding} alt="Portfolio icon" />
					</div>
          <h3>Who am I?</h3>

					<p>Full stack developer primarily leveraging JavaScript to creatively build dynamic applications that are both responsive and intuitive. My academic and personal aptitudes are centered around perceptive UX effects, animations with depth, and creating user experiences that feel native at first touch. I enjoy collaborating across the project team and end-users to design and build unique and instinctive experiences.</p>
				</section>
				<section className="about-section abt-sec-2">b</section>
				<section className="about-section abt-sec-3">c</section>
			</div>
		);
	}
}

export default About;
