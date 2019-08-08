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
				<li>Home</li>
				<li>Resume</li>
				<li>My Story</li>
			</nav>
		);
	}
}
