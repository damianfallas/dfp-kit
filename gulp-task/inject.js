var gulp = require('gulp'),
inject = require('gulp-inject'),
debug = require('gulp-debug'),
config = require('../config.json');

gulp.task('inject', function () {
	var files = [
		config.gulp.paths.build_js + 'vendor.js',
		config.gulp.paths.build_js + 'components.js',
		config.gulp.paths.build_js + '*.js',
		config.gulp.paths.build_css + '*.css'
	];

	var sources = gulp.src(files, {read: false});

	return gulp.src(config.gulp.paths.build + '**/*.php')
	.pipe(inject(sources, {addPrefix:'',relative: true}))
	.pipe(debug({title: 'inject:'}))
	.pipe(gulp.dest(config.gulp.paths.build));
});