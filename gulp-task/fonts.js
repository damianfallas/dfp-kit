var gulp = require('gulp');
config = require('../config.json');

gulp.task('fonts', function () {
	return gulp.src(config.gulp.paths.src_assets + 'fonts/**/*')
	.pipe(gulp.dest(config.gulp.paths.build_assets + 'fonts/'));
});