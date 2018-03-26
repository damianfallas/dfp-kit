import gulp from 'gulp';
import config from '../config.json';

const fonts_task = () => {
	return gulp.src(config.gulp.paths.src_assets + 'fonts/**/*')
	.pipe(gulp.dest(config.gulp.paths.build_assets + 'fonts/'));
};

export default fonts_task;