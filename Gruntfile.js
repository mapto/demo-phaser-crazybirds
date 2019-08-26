module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['.', '<%= jshint.files %>'],
      tasks: ['jshint']
    },
    connect: {
        server: {
            options: {
                port: 3000, // custom port
                base: '.', // current directory for 'index.html' is root
                keepalive: true, // keep the server alive indefinitely
                livereload: true,
                open: {target: 'http://localhost:3000'}
                }
            }
        }
	});

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('development', [
    'jshint',
    // 'watch',
  	'connect:server',
  ]);

  grunt.registerTask('default', ['development']);

};
