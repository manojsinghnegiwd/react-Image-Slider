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
	    this.previous = this.previous.bind(this);
	}

	next() {
		let Index = this.state.currentIndex;

		if(Index < this.state.images.length - 1) {
			Index += 1;
		}

		this.setState({
			currentIndex : Index
		});
	}

	previous() {
		let Index = this.state.currentIndex;

		if(0 < Index) {
			Index -= 1;
		}

		this.setState({
			currentIndex : Index
		});
	}

	render() {
		return (
		// Add your component markup and other subcomponent references here.
			<div className="react-image-slider">
				<img width={this.props.width} height={this.props.height} className="window" onClick={this.next} src={this.state.images[this.state.currentIndex].src}></img>
				<div>
					<button disabled={this.state.currentIndex == 0} className="buttons" onClick={this.previous}>
						<i className="fa fa-angle-left"></i>
					</button>
					<button disabled={this.state.currentIndex == this.state.images.length -1} className="buttons" onClick={this.next}>
						<i className="fa fa-angle-right"></i>
					</button>
				</div>
			</div>
		);
	}
}
