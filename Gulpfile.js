'use strict';
//varaibles
var gulp = require('gulp');                                 //task manager
var nodemon = require('gulp-nodemon');                      //monitor for any changes in your app
var $ = require('gulp-load-plugins')();                     //load all gulp plugins
var _ = require('lodash');                                  //builds and module formats
var config = require('./config/properties.gulp.json');      //configuration file


//nodemon task
gulp.task('nodemon', function() {
  var options = _.defaults(config.nodemon, {
    watch: config.nodemon.script,
    ignore: config.nodemon.ignore,
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development'
    }
  });
  $.nodemon(options)
    .on('restart', function() {
      $.util.log('nodemon restarted');
    })
    .on('exit', function() {
      $.util.log('nodemon exited cleanly');
    });
});
//defaul task
gulp.task('default',['nodemon']);
