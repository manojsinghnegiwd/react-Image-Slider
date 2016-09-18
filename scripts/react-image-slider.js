import React, {Component} from 'react';

export default class ReactImageSlider extends Component {

	constructor(props) {
		super(props);
	    this.state = {
			images: [
				{
					src: './img/bridge-1660417_640.jpg'
				},
				{
					src: './img/milky-way-1655504_640.jpg'
				},
				{
					src: './img/sunset-1670219_640.jpg'
				},
				{
					src: './img/boot-1620452_640.jpg'
				}
			],
			currentIndex: 0
	    };
	    this.next = this.next.bind(this);
	    console.log(this);
	}

	next() {
		let Index = this.state.currentIndex;

		if(Index < this.state.images.length - 1) {
			Index += 1;
		}

		this.setState({
			currentIndex : Index
		});

		console.log(this.state.currentIndex);
	}

	render() {
		return (
		// Add your component markup and other subcomponent references here.
			<div>
				<img onClick={this.next} src={this.state.images[this.state.currentIndex].src}></img>
				<h1>{this.state.currentIndex}</h1>
			</div>
		);
	}
}
