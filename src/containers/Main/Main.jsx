import React, { Component } from 'react';
import Header from '../../components/Header/Header';
export class Main extends Component {


	componentDidMount () {
    console.log(this.props)
  }

	render () {
		return (
			<main>
				<div className="main-center-container">
					<h1>I'm Max</h1>
          <h2>a software engineer</h2>
				</div>
			</main>
		);
	}
}

export default Main;
