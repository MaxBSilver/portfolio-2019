import React from 'react';
import fort from '../../assets/fort.png';

export default function Header (){
	return (
		<header className="fade-in">
			<section>
				<h1>I'm Max.</h1>
				<p>a software engineer.</p>
			</section>
			<div className="header-img-container">
				{/* <img src={fort} alt="green hexagonal background against a neutral styled design" /> */}
			</div>
		</header>
	);
}
