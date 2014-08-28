'use strict';

var soften = require('gulp-soften');

// save a local reference to our parameters
var gulp = null;
var config = null;

/**
 * Adds the soften task to the gulp instance
 *
 * @param {Object} gulpRef The gulp instance to attach the task to
 * @param {Object} conf The configuration options
 */
function softenSetup(gulpRef, conf) {
  gulp = gulpRef;
  config = conf;

  gulp.task('soften', false, softenTask);
}

/**
 * Runs the soften task
 */
function softenTask() {
  gulp.src(config.soften)
    .pipe(soften(2))
    .pipe(gulp.dest(config.root));
}

module.exports = softenSetup;
