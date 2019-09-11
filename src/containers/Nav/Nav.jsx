import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNav } from '../../redux/actions/index';
import { slide as Menu } from 'react-burger-menu';

export class Nav extends Component {
	handleClick = e => {
		this.props.updateNav(e.target.name);
		localStorage.setItem('nav', e.target.name);
	
	};

	render () {
		//TODO setup react-router and convert links
		return (
			<nav>
				{/* <h3>Max Silver</h3> */}
				{/* <div className="nav-container"> */}
				{/* <NavLink name="Home" className={this.props.nav === 'Home'? "selected" : null} onClick={this.handleClick} to="/">
						Home
					</NavLink>
					<NavLink name="About" className={this.props.nav === 'About'? "selected" : null} onClick={this.handleClick} to="/about">
						About
					</NavLink>
					<NavLink name="Projects"className={this.props.nav === 'Projects'? "selected" : null} onClick={this.handleClick} to="/projects">
						Projects
					</NavLink>
					<NavLink name="Notes" className={this.props.nav === 'Notes'? "selected" : null} onClick={this.handleClick} to="/notes">
						Notes
					</NavLink> */}
				<Menu disableOverlayClick isOpen={false} right width={240}>
					<NavLink
						name="Home"
						className={this.props.nav === 'Home' ? 'selected' : null}
						onClick={this.handleClick}
						to="/">
						Home
					</NavLink>
					<NavLink
						name="About"
						className={this.props.nav === 'About' ? 'selected' : null}
						onClick={this.handleClick}
						to="/about">
						About
					</NavLink>
					<NavLink
						name="Projects"
						className={this.props.nav === 'Projects' ? 'selected' : null}
						onClick={this.handleClick}
						to="/projects">
						Projects
					</NavLink>
					<NavLink
						name="Notes"
						className={this.props.nav === 'Notes' ? 'selected' : null}
						onClick={this.handleClick}
						to="/notes">
						Notes
					</NavLink>
				</Menu>
				{/* </div> */}
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
