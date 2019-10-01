import React, { Component } from 'react';
import Header from '../Header/Header';
import projectImg from '../../assets/envio-19.jpg';
import hexbrush from '../../assets/hexbrush.png';
export class Projects extends Component {
	render () {
		return (
			<div className="projects">
				<Header componentName={'Projects'} />
				<section className="sec-1">
					<img src={projectImg} />
					<h3>What I've been up to.</h3>
					<p>Here's a selection of recent projects and designs. </p>
				</section>
				<section className="project-sec sec-2">
					<div>
						<img src={hexbrush} />
					</div>
          <div>
            <p></p>
            <button>View Repo</button>
          </div>
				</section>
			</div>
		);
	}
}

export default Projects;
