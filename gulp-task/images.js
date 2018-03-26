import gulp from 'gulp';
import config from '../config.json';

const images_task  = () => {
	return gulp.src(config.gulp.paths.src_assets + 'img/**/*')
	.pipe(gulp.dest(config.gulp.paths.build_assets + 'img/'));
};

export default images_task;