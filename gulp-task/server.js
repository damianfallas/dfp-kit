import gulp from 'gulp';
import php from 'gulp-connect-php';
import browserSync from 'browser-sync';
import config from '../config.json';

var reload  = browserSync.reload;

const server_task = () => {
    php.server({ base: config.gulp.paths.build, port: 8010, keepalive: true});

    browserSync({
        proxy: '127.0.0.1:8010',
        port: 3000,
        open: true,
        notify: true
    });

    gulp.watch('./src/**/**/*.jade', ['html','inject', browserSync.reload]);
    gulp.watch('./src/assets/sass/**/**/*.scss', ['sass', browserSync.reload]);
    gulp.watch('./src/assets/js/**/*', ['js', browserSync.reload]);
    gulp.watch('./src/assets/fonts/**/*', ['fonts', browserSync.reload]);
    gulp.watch('./src/assets/img/**/*', ['images', browserSync.reload]);
    gulp.watch('./build/**/*.*').on('change', browserSync.reload);
};

export default server_task;