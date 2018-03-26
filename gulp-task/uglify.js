import gulp from 'gulp';
import uglify from 'gulp-uglify';
import debug from 'gulp-debug';
import uglifycss from 'gulp-uglifycss';
import run from 'run-sequence';
import config from '../config.json';

const uglify_task = () => {
	gulp.src(config.gulp.paths.build_js + '**/*.js')
	.pipe(debug({title: 'uglify:'}))
	.pipe(uglify())
	.pipe(gulp.dest(config.gulp.paths.build_js));

	gulp.src(config.gulp.paths.build_css + '**/*.css')
	.pipe(debug({title: 'uglify:'}))
	.pipe(uglifycss({
		"maxLineLen": 80,
		"uglyComments": true
	}))
	.pipe(gulp.dest(config.gulp.paths.build_css));
};

export default uglify_task;