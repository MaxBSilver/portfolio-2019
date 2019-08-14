import React, { Component } from 'react';

export default class Nav extends Component {
	constructor (props) {
		super(props);

		this.state = {};
	}

	componentDidMount () {}

	render () {
		//TODO setup react-router and convert links
		return (
			<nav>
				<div className="nav-container">
					<li>About</li>
					<li>Projects</li>
					<li>Notes</li>
				</div>
			</nav>
		);
	}
}
