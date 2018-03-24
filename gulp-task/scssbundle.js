var gulp = require('gulp'),
sass = require('gulp-sass'),
debug = require('gulp-debug'),
autoprefixer = require('gulp-autoprefixer'),
config = require('../config.json');

gulp.task('sass', function () {
	return gulp.src(config.gulp.paths.src_css + 'styles.scss')
	.pipe(debug({title: 'sass:'}))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest(config.gulp.paths.build_css));
});