import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import image from '../img/image.jpg'
import Button from '@material-ui/core/Button';
import './css/App.css';
//import { Button } from '@material-ui/core';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Content from './components/Content';
class App extends Component {



	render() {
		return (
			<>
			<NavBar />
			<Banner />
			<Content />
			</>
			);
		}
	}

	export default App;