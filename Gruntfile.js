var _ = require('lodash');
var glob = require('glob');
var requireConfig = require('./assets/app/config');
var spawn = require('child_process').spawn;

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
  grunt.loadNpmTasks('grunt-contrib-handlebars');
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

    handlebars: {
      options: {namespace: false, amd: true},
      templates: {
        files: (function () {
          var templates = glob.sync('./assets/**/*.hbs');
          var result = templates.reduce(function destFiles(memo, source) {
            var newName = source.replace(/\.hbs$/, '.js')
              .replace('./assets', './static');
            memo[newName] = source;
            return memo;
          }, {});
          return result;
        }())
      }
    },

    copy: {
      app: {
        src: '**/*.js',
        dest: '<%= clean.app %>',
        cwd: './assets/app',
        expand: true
      },

      img: {
        src: '**/*.png',
        dest: '<%= clean.img %>',
        cwd: './assets/images',
        expand: true
      }
    },

    clean: {
      app: './static/app',
      img: './static/images',
      compass: './sass-cache',
      karma: './karma-*',
      tmp: './tmp-*.tmp'
    },

    compass: {
      dist: {
        options: {
          sassDir: 'assets/style',
          cssDir: 'static/style',
          cacheDir: './sass-cache',
          importPath: ['vendor/normalize-scss']
        }
      }
    },

    karma: {
      server: {
        configFile: 'config/test.js',
        background: true

      },
      unit: {
        configFile: 'config/test.js',
        background: false,
        singleRun: true
      }
    },

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
    },

    watch: {
      style: {
        files: '<%= compass.dist.options.sassDir %>/**/*.scss',
        tasks: ['compass'],
        options: {livereload: true}
      },
      handlebars: {
        files: './assets/**/*.hbs',
        tasks: ['js'],
        options: {livereload: true}
      },
      app: {
        files: './assets/**/*.js',
        tasks: ['js'],
        options: {livereload: true}
      },
      test: {
        files: './test/**/*.js',
        tasks: ['test'],
        options: {livereload: true}
      }
    }
  });

  grunt.registerTask('run-deck', function () {
    var deck = spawn('./bin/deck');
    grunt.log.writeln('Running deck with pid: ' + deck.pid);
    deck.stdout.pipe(process.stdout);
    deck.stderr.pipe(process.stderr);
  });

  grunt.registerTask('test', ['jshint', 'jscs', 'karma:unit', 'clean:karma']);
  grunt.registerTask('dev', ['default']);
  grunt.registerTask('style', ['compass', 'clean:compass', 'clean:tmp']);
  grunt.registerTask('js', ['handlebars', 'copy', 'requirejs', 'test']);
  grunt.registerTask('build', ['clean:app', 'style', 'js', 'watch']);

  grunt.registerTask('default', ['run-deck', 'karma:server', 'build']);
};
