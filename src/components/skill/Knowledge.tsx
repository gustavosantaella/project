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
			HTML
			</Typography>
			<Slider
			className='col-12'
			defaultValue={90}
			aria-labelledby="discrete-slider-small-steps"
			step={50}
			marks
			color='secondary'

			min={-0}
			max={100}
			valueLabelDisplay="auto"
			/>


			<Typography id="discrete-slider-small-steps" gutterBottom>
			CSS
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
			JAVASCRIPT
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


			<Typography id="discrete-slider-small-steps" gutterBottom>
			PHP
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

			<Typography id="discrete-slider-small-steps" gutterBottom>
			POSTGRESQL / MYSQL
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

			<Typography id="discrete-slider-small-steps" gutterBottom>
			NoSQL
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

export default Knowledge;
