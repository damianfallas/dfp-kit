var gulp = require('gulp'),
pug = require('gulp-pug'),
debug = require('gulp-debug'),
rename = require("gulp-rename"),
config = require('../config.json');

gulp.task('html', function () {
	return gulp.src(config.gulp.paths.src + '**/*.pug')
	.pipe(debug({title: 'html-pug:'}))
	.pipe(pug({pretty: true}))
	.pipe(rename({extname: ".php"}))
	.pipe(gulp.dest(config.gulp.paths.build + ''));
});