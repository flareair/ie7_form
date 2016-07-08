'use strict';
module.exports = function (grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);
  // Define the configuration for all the tasks
  grunt.initConfig({

    // connect server

    // concat js files

    less: {
      development: {
        files: {
          'public/build.css': 'less/main.less'
        }
      }
    },

    // Prefixer

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 7', 'ie 8', 'ie 9']
      },
      files: {
        src: 'public/build.css',
        dest: 'public/build.css'
      }
    },

    //minify css

    cssmin: {
      minify: {
        src: 'public/build.css',
        dest: 'public/build.css'
      }
    },

    // watch task

    watch: {
      css: {
        files: ['less/{,*/}*.less'],
        tasks: ['less','autoprefixer']
      }
    }
  });

  grunt.registerTask('serve',[
    'watch'
  ]);
  grunt.registerTask('build', [
    'less','autoprefixer','cssmin'
  ]);
};