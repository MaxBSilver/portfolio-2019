import React from 'react';
import Nav from '../Nav/Nav';
import '../../sass/index.scss';
import Main from '../Main/Main';
import { Route } from 'react-router-dom';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Notes from '../../components/Notes/Notes';
const App = () => {
	return (
		<div className="App">
			<Nav />
			<Route exact path="/" component={Main} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/notes" component={Notes} />
		</div>
	);
};

export default App;
