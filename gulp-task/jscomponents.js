import gulp from 'gulp';
import concat from 'gulp-concat';
import debug from 'gulp-debug';
import run from 'run-sequence';
import config from '../config.json';

const js_components_task = () => {
	var order = config.gulp.jsDependenciesOrder;
	order = order.map(function(e) {return config.gulp.paths.src_js + 'components/' + e});
	order.push(config.gulp.paths.src_js + 'components/**/*.js');

	return gulp.src(order)
	.pipe(debug({title: 'components:'}))
	.pipe(concat('components.js'))
	.pipe(gulp.dest(config.gulp.paths.build_js));
};

export default js_components_task;