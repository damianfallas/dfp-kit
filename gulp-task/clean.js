import gulp from 'gulp';
import del from 'del';
import config from '../config.json';

const clean_task = () => {
  return del(config.gulp.paths.build);
};

export default clean_task;