import React, { Component } from 'react';
import { Slider,Typography } from '@material-ui/core';


interface Props{}
class Knowledge extends Component<Props> {

	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<>

			<div>
			<Typography id="discrete-slider-small-steps" gutterBottom>
			Teamwork
			</Typography>
			<Slider
			className='col-12'
			defaultValue={100}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'

			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>


			<Typography id="discrete-slider-small-steps" gutterBottom>
			Autodidact
			</Typography>
			<Slider
			className='col-12'
			defaultValue={85}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'

			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>

			<Typography id="discrete-slider-small-steps" gutterBottom>
			METHODOLOGY SCRUM
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


			<Typography id="discrete-slider-small-steps" gutterBottom>
			Problem resolution
			</Typography>
			<Slider
			className='col-12'
			defaultValue={60}
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

export default Knowledge;
