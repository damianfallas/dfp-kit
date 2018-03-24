var gulp = require('gulp'),
concat = require('gulp-concat'),
debug = require('gulp-debug'),
run = require('run-sequence'),
config = require('../config.json');

gulp.task('js:vendor', function () {
	var order = config.gulp.vendorDependenciesOrder;
	order = order.map(function(e) {return config.gulp.paths.src_js + 'vendor/' + e});
	order.push(config.gulp.paths.src_js + 'vendor/**/*.js');

	return gulp.src(order)
	.pipe(debug({title: 'vendor:'}))
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest(config.gulp.paths.build_js));
});

gulp.task('js:components', function () {
	var order = config.gulp.jsDependenciesOrder;
	order = order.map(function(e) {return config.gulp.paths.src_js + 'components/' + e});
	order.push(config.gulp.paths.src_js + 'components/**/*.js');

	return gulp.src(order)
	.pipe(debug({title: 'components:'}))
	.pipe(concat('components.js'))
	.pipe(gulp.dest(config.gulp.paths.build_js));
});


gulp.task('js', function(cb){
	var tasksToRun = ['js:vendor', 'js:components'];
	return run.apply({},tasksToRun);
});