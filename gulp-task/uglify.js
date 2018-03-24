var gulp = require('gulp'),
uglify = require('gulp-uglify'),
debug = require('gulp-debug'),
uglifycss = require('gulp-uglifycss'),
run = require('run-sequence'),
config = require('../config.json');

gulp.task('uglify:js', function () {
	return gulp.src(config.gulp.paths.build_js + '**/*.js')
	.pipe(debug({title: 'uglify:'}))
	.pipe(uglify())
	.pipe(gulp.dest(config.gulp.paths.build_js));
});

gulp.task('uglify:css', function () {
	return gulp.src(config.gulp.paths.build_css + '**/*.css')
	.pipe(debug({title: 'uglify:'}))
	.pipe(uglifycss({
		"maxLineLen": 80,
		"uglyComments": true
	}))
	.pipe(gulp.dest(config.gulp.paths.build_css));
});

gulp.task('uglify', function(cb){
	var tasksToRun = ['uglify:css', 'uglify:js'];
	run.apply({},tasksToRun);
});