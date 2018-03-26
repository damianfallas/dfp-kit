import gulp from 'gulp';
import pug from 'gulp-pug';
import debug from 'gulp-debug';
import rename from "gulp-rename";
import config from '../config.json';

const html_task = () => {
	return gulp.src(config.gulp.paths.src + '**/*.pug')
	.pipe(debug({title: 'html-pug:'}))
	.pipe(pug({pretty: true}))
	.pipe(rename({extname: ".php"}))
	.pipe(gulp.dest(config.gulp.paths.build + ''));
};

export default html_task;