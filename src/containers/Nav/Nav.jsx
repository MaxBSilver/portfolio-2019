import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNav } from '../../redux/actions/index';
import { slide as Menu } from 'react-burger-menu';

export class Nav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			menuOpen: false
		};
	}

	handleClick = e => {
		localStorage.setItem('nav', e.target.name);
		this.setState({ menuOpen: false });
		this.props.updateNav(e.target.name);
	};
	handleStateChange (state) {
		this.setState({ menuOpen: state.isOpen });
	}

	render () {
		return (
			<nav>
				<span className="logo" />
				<section>
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
				</section>

				<Menu
					disableOverlayClick
					isOpen={this.state.menuOpen}
					onStateChange={state => this.handleStateChange(state)}
					right
					width={240}>
					<span>MENU</span>
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
