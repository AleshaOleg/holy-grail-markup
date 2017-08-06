module.exports = function(grunt) {
  grunt.initConfig({
    csscount: {
      dev: {
        src: [
          'atomic/style.css',
          'bem-bootstrap-4/style.css',
          'bem-css/style.css',
          'bem-flexboxgrid/style.css',
          'bem-platform/pages/index/index.css',
          'css-modules/build/style.css',
          'oocss/style.css',
          'organic/style.css',
          'raw/style.css',
          'smacss/basic.css',
          'smacss/layouts.css',
          'smacss/modules.css',
          'smacss/states.css',
          'smacss/themes.css'
        ]
      }
    }
  });
   
  grunt.loadNpmTasks('grunt-css-count');
   
  grunt.registerTask('default', ['csscount']);
};
