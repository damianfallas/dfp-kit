var gulp = require('gulp'),
run = require('run-sequence'),
config = require('./config.json');

var requireDir = require('require-dir');
var dir = requireDir('./gulp-task', {recurse: true});

gulp.task('default', function(cb){
	var tasksToRun = ['clean', 'images', 'fonts' ,'js:vendor', 'js:components', 'sass', 'html', 'inject', 'server'];
	run.apply({},tasksToRun);
});

gulp.task('build', function(cb){
	var tasksToRun = ['clean', 'images', 'fonts' ,'js:vendor', 'js:components', 'sass', 'html', 'inject', 'uglify'];
	run.apply({},tasksToRun);
});