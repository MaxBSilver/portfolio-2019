import React from 'react';
import spaceship from '../../assets/space_ship.png';

export default function Header (){
	return (
		<header className="fade-in">
			<section>
				<h1>I'm Max</h1>
			</section>
			<div className="header-img-container">
				<img src={spaceship} alt="green hexagonal background against a neutral styled design" />
			</div>
		</header>
	);
}
