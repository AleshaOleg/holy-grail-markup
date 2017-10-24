var gulp = require('gulp');
var acss = require('gulp-atomizer');
var browserSync = require('browser-sync').create();

gulp.task('bs', ['acss'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html", ['acss']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('acss', function () {
    return gulp.src('*.html')
        .pipe(acss({
            outfile: 'style.css',
            acssConfig: Object.assign({}, require('./config'))
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['acss', 'bs']);
