import React from 'react';

export default function Header (props){
	return (
		<div>
			<section className="header-background">
				<img
					src={
						'https://jonathanmh.com/wp-content/uploads/2017/05/best-visual-studio-code-dark-syntax-themes-1200x433.png'
					}
					alt="code background"
				/>
			</section>
			<section className="header-main">
				<header className="fade-in">
					<h2>{props.componentName}</h2>
				</header>
			</section>
		</div>
	);
}
