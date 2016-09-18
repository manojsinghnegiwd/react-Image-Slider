import React, {Component} from 'react';

export default class ReactImageSlider extends Component {

	constructor(props) {
		super(props);
	    this.state = {
			currentIndex: 0
	    };
	    this.next = this.next.bind(this);
	    this.previous = this.previous.bind(this);
	}

	next() {
		let Index = this.state.currentIndex;

		if(Index < this.props.images.length - 1) {
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
				<img width={this.props.width} height={this.props.height} className="window" onClick={this.next} src={this.props.images[this.state.currentIndex].src}></img>
				<div>
					<button disabled={this.state.currentIndex == 0} className="buttons" onClick={this.previous}>
						<i className="fa fa-angle-left"></i>
					</button>
					<button disabled={this.state.currentIndex == this.props.images.length -1} className="buttons" onClick={this.next}>
						<i className="fa fa-angle-right"></i>
					</button>
				</div>
			</div>
		);
	}
}
