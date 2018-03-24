var gulp = require('gulp'),
    php = require('gulp-connect-php'),
    browserSync = require('browser-sync');

var reload  = browserSync.reload;

gulp.task('php', function() {
    php.server({ base: config.gulp.paths.build, port: 8010, keepalive: true});
});
gulp.task('browser-sync',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8010',
        port: 3000,
        open: true,
        notify: true
    });
});
gulp.task('server', ['browser-sync'], function () {
  gulp.watch('./src/**/**/*.jade', ['html','inject', browserSync.reload]);
  gulp.watch('./src/assets/sass/**/**/*.scss', ['sass', browserSync.reload]);
  gulp.watch('./src/assets/js/**/*', ['js', browserSync.reload]);
  gulp.watch('./src/assets/fonts/**/*', ['fonts', browserSync.reload]);
  gulp.watch('./src/assets/img/**/*', ['images', browserSync.reload]);
  gulp.watch('./build/**/*.*').on('change', browserSync.reload);
});