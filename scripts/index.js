import React from 'react';
import {render} from 'react-dom';
import ReactImageSlider from './react-image-slider';

let images = [
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
			];

render(
  <ReactImageSlider width="640"  height="486" images={images} />,
  document.getElementById('root')
);
