'use strict';
module.exports = function(grunt) {
  grunt.initConfig({

    browserify: {
      '../dist/app.js': ['../javascripts/quiz.js']
    },

    jshint: {
      files: ['../javascripts/**/*.js'], //this is the folder where all JS code should be located.
      //It looks for ANY file that ends in '.js' in the 'javascripts' folder
      options: {
        predef: ["document", "console", "$", "Module"], //predefined
        esnext: true,
        globalstrict: true,
        globals: { "Robot": true, "require": true }, //put global variables here ex: {"Sandwich": true}
        browserify: true
      }
    },
    sass: {
      dist: {
        files: {
          '../css/quiz.css': '../sass/quiz.scss' //if your scss files is named something different, you’ll have to change this path.
            //this creates a file called main.css FROM sass/styles.scss
        }
      }
    },
    watch: { //this performs the tasks above automatically whenever something is changed.
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
  //now, just typing 'grunt' will run this and the watch task will take over.
};
