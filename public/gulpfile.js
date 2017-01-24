const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');
const conf = require('./conf/gulp.conf');
const awspublish = require('gulp-awspublish');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('inject', gulp.series(gulp.parallel('styles', 'scripts'), 'inject'));
gulp.task('build', gulp.series('partials', gulp.parallel('inject', 'other', 'icons'), 'build'));
gulp.task('test', gulp.series('scripts', 'karma:single-run'));
gulp.task('test:auto', gulp.series('watch', 'karma:auto-run'));
gulp.task('serve', gulp.series('inject', 'watch', 'browsersync', 'icons'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);
gulp.task('upload', upload);
gulp.task('publish', gulp.series('build', upload));

gulp.task('icons', function(done) {
  return gulp.src([
      './bower_components/components-font-awesome/fonts/**.*',
      './bower_components/simple-line-icons/fonts/**.*'
    ])
    .pipe(gulp.dest('./.tmp/fonts'))
    .pipe(gulp.dest('./dist/fonts'));
  done();
});

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch([
    conf.path.src('index.html'),
    'bower.json'
  ], gulp.parallel('inject'));

  gulp.watch(conf.path.src('app/**/*.html'), reloadBrowserSync);
  gulp.watch([
    conf.path.src('**/*.scss'),
    conf.path.src('**/*.css')
  ], gulp.series('styles'));
  gulp.watch(conf.path.src('**/*.js'), gulp.series('inject'));
  done();
}

function upload(done) {
  aws = require('./aws.json');

  var publisher = awspublish.create({
    region: aws.region,
    params: {
      Bucket: aws.bucket
    },
    accessKeyId: aws.key,
    secretAccessKey: aws.secret
  });

  return gulp.src('./dist/{scripts,styles,fonts}/**')
  .pipe(publisher.publish())
  .pipe(publisher.sync('', [/^projects/]))
  .pipe(awspublish.reporter());
  done();
}
