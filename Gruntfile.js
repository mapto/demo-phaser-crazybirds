module.exports = function(grunt) {

  grunt.initConfig({
    eslint: {
      target: ['dist/bundle.js'],
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

  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [
    'eslint',
    'connect:server',
  ]);

};
