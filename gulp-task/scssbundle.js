import gulp from 'gulp';
import sass from 'gulp-sass';
import debug from 'gulp-debug';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config.json';

const sass_task = () => {
	return gulp.src(config.gulp.paths.src_css + 'styles.scss')
	.pipe(debug({title: 'sass:'}))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(gulp.dest(config.gulp.paths.build_css));
};

export default sass_task;