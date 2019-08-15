import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
					<NavLink to="/">About</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/notes">Notes</NavLink>
				</div>
			</nav>
		);
	}
}
