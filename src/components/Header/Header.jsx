import React from 'react';

export default function Header (props){
	return (
		<header className="fade-in">
			<h2>{props.componentName}</h2>
		</header>
	);
}
