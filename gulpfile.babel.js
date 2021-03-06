import gulp from 'gulp';
import mocha from 'gulp-mocha';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';

const paths = {
  js: ['./src/**/*.js'],
  destination: './dist'
}

let express;

gulp.task('server', () => {
  express = server.new(paths.destination);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});

gulp.task('watch', () => {
  return watch(paths.js, () => {
    run('build', 'mocha');
  });
});

gulp.task('clean', cb => {
  rimraf(paths.destination, cb);
});

gulp.task('babel', shell.task([
  'babel src --out-dir dist'
]));

gulp.task('build', cb => {
  run('clean', 'babel', cb);
});

gulp.task('mocha', shell.task([
  'mocha "dist/**/*.spec.js"'
]));

gulp.task('test', cb => {
  run('build', 'mocha', cb);
});

gulp.task('publish', cb => {
  run('test', cb);
});

gulp.task('default', cb => {
  run('server', 'build', 'mocha', 'restart', 'watch', cb);
});
