import React, { Component } from 'react';
import '../css/style.css';
/*import $ from 'jquery';*/
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';

export default class Content extends Component{

	render() {

		return (
			<>
			<div className="container-fluid  p-4">
			<About/>
			<Skills/>
			<Projects/>
			<Footer/>
			</div>

			</>
			);
	}
}


