import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNav } from '../../redux/actions/index';

export class Nav extends Component {


	componentDidMount () {
		console.log(this.props)
		console.log(updateNav)
	}
	handleClick = e => {
	
		this.props.updateNav(e.target.name)
	};

	render () {
		//TODO setup react-router and convert links
		return (
			<nav>
				<div className="nav-container">
					<NavLink name="About"  onClick={this.handleClick} to="/">
						About
					</NavLink>
					<NavLink name="Projects" onClick={this.handleClick} to="/projects">
						Projects
					</NavLink>
					<NavLink name="Notes" onClick={this.handleClick} to="/notes">
						Notes
					</NavLink>
				</div>
			</nav>
		);
	}
}
export const mapStateToProps = state => ({
	nav: state.nav
});

export const mapDispatchToProps = dispatch => ({
	updateNav: name => dispatch(updateNav(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
