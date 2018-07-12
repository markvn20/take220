import React, { Component } from 'react';

import img1 from './images/image.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';

import './Section1.css';


class Section1 extends Component {
	state = {
		count: 1
	}

	componentDidMount() {
		setTimeout(() => {
	  this.setState({count: this.state.count + 1});
	  if(this.state.count > 4) {
	  	this.setState({count: 1});
	  }
	}, 3000);
	}

	imageClass = (value) => {
		return ((value == this.state.count) ? 'active': 'defaults');
	}
	render() {
	const image = {
	backgroundImage1: `url(${img1})`,
	backgroundImage2: `url(${img2})`,
	backgroundImage3: `url(${img3})`,
	backgroundImage4: `url(${img4})`,
	}

	const defaults = {
		display: 'none'
	}

	const active = {
		display: 'block'
	}

	const backgroundImage1 = {
		backgroundImage: image.backgroundImage1
	}

	const backgroundImage2 = {
		backgroundImage: image.backgroundImage2
	}

	const backgroundImage3 = {
		backgroundImage: image.backgroundImage3
	}

	const backgroundImage4 = {
		backgroundImage: image.backgroundImage4
	}

	const sectionStyle = {
		position: 'absolute',
		padding: '40% 0 0',
		height: '100%',
		width: '100%',
	}

	
		return (
			<div style={{'position': 'relative'}} className="backgroundContainer">
				<div className={[this.imageClass('1'), "main-class"].join(' ')} style={Object.assign({}, sectionStyle, backgroundImage1)}>{this.state.count}</div>
				<div className={this.imageClass('2')} style={Object.assign({}, sectionStyle, backgroundImage2)}>{this.state.count}</div>
				<div className={this.imageClass('3')} style={Object.assign({}, sectionStyle, backgroundImage3)}>{this.state.count}</div>
				<div className={this.imageClass('4')} style={Object.assign({}, sectionStyle, backgroundImage4)}>{this.state.count}</div>
			</div>
		)
	}
};

export default Section1;