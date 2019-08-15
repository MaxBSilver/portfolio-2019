import React from 'react';
import Nav from '../Nav/Nav';
import '../../sass/index.scss';
import Main from '../Main/Main';
import { Route } from 'react-router-dom';

const App = () => {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/" component={Main} />
		</div>
	);
};

export default App;
