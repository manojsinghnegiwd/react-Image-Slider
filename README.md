# React Image Slider

A React Image slider component built with the following technologies:
* [React](https://github.com/facebook/react)
* [Babel 6](https://github.com/vasanthk/react-es6-webpack-boilerplate) React ES6 Webpack Boilerplate
* [Font-Awesome](http://fontawesome.io/) for hot reloading React components in real time.

# options

### Images

An array of image to show in slider

```
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

```
Then in your code

```
<ReactImageSlider width="640"  height="486" images={images} />
```

### width and Height

Control width and height of image window using width and height attributes

```
<ReactImageSlider width="640"  height="486" images={images} />
```

### Dev Usage

```
npm install
npm start
Open http://localhost:5000
```

### Linting

ESLint with React linting options have been enabled.

```
npm run lint
```

To build

```
npm run build
```

