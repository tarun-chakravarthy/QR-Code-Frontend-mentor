module.exports = function (grunt) {
  // Project configuration
  grunt.initConfig({
    // Task configurations go here
    less: {
      options: {
        compress: true, // Minify the output CSS
      },
      all: {
        files: {
          // Source file : Destination file
          'dist/css/styles.css': 'src/less/main.less',
        },
      },
    },
  });

  // Load Grunt plugin
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register the default task
  grunt.registerTask('default', ['less']);
};
