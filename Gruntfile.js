module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['Gruntfile.js', 'js/script.js']
    },
    copy: {
      main: {
        files: [{
          expand: true,
          src: ['css/*.css'],
          dest: 'dist/'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['jshint', 'uglify', 'copy'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['css/*.css'],
        tasks: ['copy'],
        options: {
          spawn: false,
        }
      }
    },
    uglify: {
      all: {
        files: {
          'dist/js/script.min.js': ['js/script.js'],
          'dist/js/jquery.min.js': ['js/jquery.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'copy', 'watch']);
};