import gulp from 'gulp';
import run from 'run-sequence';

import clean_task from './gulp-task/clean';
import fonts_task from './gulp-task/fonts';
import html_task from './gulp-task/html';
import images_task from './gulp-task/images';
import inject_task from './gulp-task/inject';
import js_vendor_task from './gulp-task/jsvendor';
import js_components_task from './gulp-task/jscomponents';
import scssbundle_task from './gulp-task/scssbundle';
import server_task from './gulp-task/server';
import uglify_task from './gulp-task/uglify';

gulp.task('clean', clean_task);
gulp.task('fonts', fonts_task);
gulp.task('html', html_task);
gulp.task('images', images_task);
gulp.task('inject', inject_task);
gulp.task('js_vendor', js_vendor_task);
gulp.task('js_components', js_components_task);
gulp.task('scssbundle', scssbundle_task);
gulp.task('server', server_task);
gulp.task('uglify', uglify_task);

gulp.task('default', (cb) => {
	var tasksToRun = ['clean', 'images', 'fonts' ,'js_vendor', 'js_components', 'scssbundle', 'html', 'inject', 'server'];
	run.apply({},tasksToRun);
});

gulp.task('build', (cb) => {
	var tasksToRun = ['clean', 'images', 'fonts' ,'js_vendor', 'js_components', 'scssbundle', 'html', 'inject', 'uglify'];
	run.apply({},tasksToRun);
});