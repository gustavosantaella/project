import React, { Component } from 'react';

interface Props{}
class Footer extends Component<Props> {

	constructor(props:Props) {
		super(props);
	}

	render() {
		return (
			<>
			<footer className='bg-light shadow-lg h-auto '>
			<div className='text-center h1'>

			<a href="#" className='ml-4 text-decoration-none'>
			<i className="fas fa-envelope fa-3x"></i>
			</a>

			<a  className='ml-4 text-decoration-none' 
			href="https://www.instagram.com/gustasantaella/">
				<i className="fab fa-instagram fa-3x instagram"></i>
			</a>
			
			<a className='ml-4 text-decoration-none' target="_blank" href="https://api.whatsapp.com/send?phone=584127328212&text=Hola Gustavo,%20estoy interesado
			 en contactar contigo, respondeme cuando puedas, Gracias.">
				<i className="fab fa-whatsapp fa-3x text-success"></i>
			</a>
			
			<a href="https://github.com/gustavosantaella" className='text-decoration-none ml-4 text-dark'>
				<i className="fab fa-github fa-3x"></i>
			</a>
			</div>
			</footer>
			</>

			);
	}
}

export default Footer;
