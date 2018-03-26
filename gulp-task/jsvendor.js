import gulp from 'gulp';
import concat from 'gulp-concat';
import debug from 'gulp-debug';
import run from 'run-sequence';
import config from '../config.json';

const js_vendor_task = () => {
	var order = config.gulp.vendorDependenciesOrder;
	order = order.map(function(e) {return config.gulp.paths.src_js + 'vendor/' + e});
	order.push(config.gulp.paths.src_js + 'vendor/**/*.js');

	return gulp.src(order)
	.pipe(debug({title: 'vendor:'}))
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest(config.gulp.paths.build_js));
};

export default js_vendor_task;