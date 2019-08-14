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
					<li>home</li>
					<li>resume</li>
					<li>my story</li>
				</div>
			</nav>
		);
	}
}
