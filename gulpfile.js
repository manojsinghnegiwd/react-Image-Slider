var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('bundle', function(){
	return browserify({
		extensions: ['.js', '.jsx'],
		entries: 'main.js'
	})
});