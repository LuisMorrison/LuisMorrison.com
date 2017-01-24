const gulp = require('gulp');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const uglifySaveLicense = require('uglify-save-license');
const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  const jsFilter = filter(conf.path.src('**/*.js'), {restore: true});
  return gulp.src(conf.path.src('/index.html'))
    .pipe(useref())
    .pipe(jsFilter)
    .pipe(eslint.format())
    .pipe(gulp.dest(conf.path.tmp()));
}
