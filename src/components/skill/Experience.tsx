import React, { Component } from 'react';
import { Slider,Typography,Checkbox } from '@material-ui/core';


interface Props{}
interface State{
	
	active:boolean
}

class Frameworks extends Component<Props,State> {

	constructor(props: Props) {
		super(props);
		this.state= {
			active:false
		}
	}

	handleCheck = (state:any) => {
		this.setState({
			active:state
		})
	}
	render() {
		return (
			<>	
			<div>

			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			Backend developer
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

			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			Frontend developer
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

			<Typography 
			id="discrete-slider-small-steps" gutterBottom>
			Freelace developer
			</Typography>
			<Slider
			className='col-12'
			defaultValue={55}
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
			Currently working?
			</Typography>

			<Checkbox
			defaultChecked
			onChange={() => this.handleCheck(this.state.active?false:true)}
			indeterminate
			inputProps={{ 'aria-label': 'primary checkbox' }}
			/>

			{this.state.active?'No':'Yes'}


			</div>
			

			</>
			);
	}
}

export default Frameworks;
