module.exports = function(grunt) {

    grunt.initConfig({
        atomizer: {
            files: [
                {
                    src: ['./*.html'],
                    dest: './style.css'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-atomizer');

    grunt.registerTask('default', ['atomizer']);
};
