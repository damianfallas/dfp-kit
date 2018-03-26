import gulp from 'gulp';
import inject from 'gulp-inject';
import debug from 'gulp-debug';
import config from '../config.json';

const inject_task = () => {
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
};

export default inject_task;