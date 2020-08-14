import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiStack } from "react-icons/gi";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageGimp from './components/PageGimp';
import PageAll from './components/PageAll';
import PageGit from './components/PageGit';
import PageLinux from './components/PageLinux';
import { NavLink } from 'react-router-dom';

import { without } from 'lodash';
//import { without} from './components/qtools/qstr';
// const qstr = require('./components/qtools/qstr');

// a change

class App extends Component {
	constructor() {
		super();
		this.state = {
			"version": "0.0.3"
		}
	}
	// test of lodash
	showMessage() {
		let names = ["sky", "earth", "wind", "fire"];
		const name = names[1];
		names = without(names, name);
		return names;
	}
	render() {
		return (

			<BrowserRouter>
				<nav class="navbar navbar-expand navbar-dark bg-dark">
					<ul class="navbar-nav">
						<li class="nav-item">
							<NavLink to="/all" className="nav-link"><GiStack /> All</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/git" className="nav-link"><GiStack /> Git</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/gimp" className="nav-link"><GiStack /> Gimp</NavLink>
						</li>
						<li class="nav-item">
							<NavLink to="/linux" className="nav-link"><GiStack /> Linux</NavLink>
						</li>
					</ul>
				</nav>
				<p className="tiny mt-2 mb-0 pb-0 small mr-4 text-right">Version {this.state.version}</p>
				<main className="container mt-1 pl-0 pr-4">
					<Switch>
						{/* <Route path="/all" component={PageAll} flashcards={this.state.flashcards} /> */}
						<Route path="/all" component={PageAll} />
						<Route path="/git" component={PageGit} />
						<Route path="/gimp" component={PageGimp} />
						<Route path="/linux" component={PageLinux} />
					</Switch>
					<hr />
					<h4>Testing</h4>
					<div>{this.showMessage()}</div>
				</main>
			</BrowserRouter>
		);
	}
}

export default App;
