import React, { Component } from 'react';
import { Slider,Typography } from '@material-ui/core';


interface Props{}
interface State{
	items:{
		name:string,
		value:number 
	}[]
}
class Frameworks extends Component<Props,State> {

	constructor(props: Props) {
		super(props);

	}

	render() {
		return (
			<>	
			<div>
			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			Bootstrap4
			</Typography>
			<Slider
			className='col-12'
			defaultValue={80}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'
			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>

			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			MATERIAL - UI
			</Typography>
			<Slider
			className='col-12'
			defaultValue={30}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'
			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>


			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			LARAVEL
			</Typography>
			<Slider
			className='col-12'
			defaultValue={70}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'
			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>


			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			REACT / learning
			</Typography>
			<Slider
			className='col-12'
			defaultValue={40}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'
			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>




			</div>
			

			</>
			);
	}
}

export default Frameworks;
