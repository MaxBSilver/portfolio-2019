import React from 'react';

export default function Header (props){
	return (
			<section className="header-main">
				<header className="fade-in">
					<h2>{props.componentName}</h2>
				</header>
			</section>
	);
}
