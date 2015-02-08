var _ = require('lodash');
var requireConfig = require('./assets/app/config');

function buildRequireConfig(options) {
  'use strict';
  if (options == null) {
    options = {};
  }
  var ret = {};
  _.extend(ret, requireConfig('../..'), options, {
    baseUrl: 'static/app',
    name: 'main',
    optimize: 'none',
    out: './static/app.js'
  });
  return ret;
}

module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    requirejs: {
      build: {
        options: buildRequireConfig({
          generateSourceMaps: true,
          optimize: 'none'
        })
      }
    },

    copy: {
      app: {
        src: '**/*.js',
        dest: '<%= clean.app %>',
        cwd: './assets/app',
        expand: true
      }
    },

    clean: {
      app: './static/app'
    },

    compass: {
      dist: {
        options: {
          sassDir: 'assets/style',
          cssDir: 'static/style',
          importPath: ['vendor/normalize-scss']
        }
      }
    },

    karma: {unit: {configFile: 'config/test.js'}},

    jshint: {
      options: {jshintrc: './.jshintrc'},
      grunt: {
        files: {src: 'Gruntfile.js'}
      },
      test: {
        files: {src: './test/**/*.js'}
      }
    },

    jscs: {
      src: ['Gruntfile.js', 'test/**/*.js'],
      options: {config: '.jscsrc'}
    }

  });

  grunt.registerTask('test', ['jshint', 'jscs', 'karma']);
  grunt.registerTask('dev', ['default']);

  grunt.registerTask('default', [
    'clean',
    'compass',
    'copy',
    'requirejs',
    'jshint'
  ]);
};
