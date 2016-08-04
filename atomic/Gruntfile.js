module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: [
                    './*.html'
                ],
                tasks: ['atomizer']
            }
        },
        atomizer: {
            options: {
                configFile: './config.js'
            },
            files: {
                src: ['./*.html'],
                dest: './style.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-atomizer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
