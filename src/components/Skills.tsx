import React, { Component } from 'react';

import Knowledge from './skill/Knowledge';
import Framewoks from './skill/Frameworks';
import Skill from './skill/Skill';
import Experience from './skill/Experience';
import Aos from 'aos';
import 'aos/dist/aos.css';

interface Props{}
class Skills extends Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<>
			<div  className='mb-5 w-100' id='skills' >
			<div className='row '>
			<div className='card mt-5 shadow col-md-2 ml-5' 
		data-aos="flip-left" data-aos-delay="100">
			<div className='card-body'>
			<h5 className='card-title'>Conocimientos</h5><hr/>
			<div className='card-text'>
			
			<Knowledge/>
			</div>
			</div> 
			</div>
			

			<div className='card mt-5 shadow col-md-2 ml-5'
			data-aos="flip-left" data-aos-delay="100">
			<div className='card-body'>
			<h4 className='card-title'>Framewoks</h4><hr/>
			<div className='card-text'>
			
			<Framewoks/>
			</div>
			</div> 

			</div>


			<div className='card mt-5 shadow col-md-2  ml-5'
			data-aos="flip-left" data-aos-delay="100">
			<div className='card-body'>
			<h4 className='card-title'>Habilidades</h4><hr/>
			<div className='card-text'>
			
			<Skill/>
			</div>
			</div> 
			</div>
			



			<div className='card mt-5 shadow col-md-2  ml-5 '
			data-aos="flip-left" data-aos-delay="100">
			<div className='card-body'>
			<h4 className='card-title'>Experiencia</h4><hr/>
			<div className='card-text'>
			
			<Experience/>
			</div>
			</div> 
			</div>

			</div>


			</div>

			</>
			);
	}
}

export default Skills;
