var gulp = require('gulp'),
config = require('../config.json');

gulp.task('images', function () {
	return gulp.src(config.gulp.paths.src_assets + 'img/**/*')
	.pipe(gulp.dest(config.gulp.paths.build_assets + 'img/'));
});