import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNav } from '../../redux/actions/index';

export class LrgButton extends Component {
	handleClick = e => {
		this.props.updateNav(e.target.name);
		localStorage.setItem('nav', e.target.name);
	};
	render () {
		return (
			<div className="lrg-btn">
				<NavLink onClick={this.handleClick} to={this.props.btnName}>
					<button name={this.props.btnName}>
						<span>{this.props.btnName}</span>
					</button>
				</NavLink>
			</div>
		);
	}
}

export const mapStateToProps = state => ({
	nav: state.nav
});

export const mapDispatchToProps = dispatch => ({
	updateNav: name => dispatch(updateNav(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(LrgButton);
