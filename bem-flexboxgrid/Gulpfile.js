var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    cached          = require('gulp-cached'),
    remember        = require('gulp-remember'),
    gulpif          = require('gulp-if'),
    path            = require('path'),
    multipipe       = require('multipipe'),
    notify          = require('gulp-notify'),
    browsersync     = require('browser-sync').create();

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

gulp.task('sass', function(filepath) {
    return multipipe (
        gulp.src('*.scss'),
        cached('*.scss'),
        gulpif(isDevelopment, sourcemaps.init({loadMaps: true})),
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
        sass({
            outputStyle: "compressed"
        }),
        gulpif(isDevelopment, sourcemaps.write()),
        remember('*.scss'),
        gulp.dest('./')
    ).on('error', notify.onError(function(err){
        return {
            title: 'Error',
            message: err.message
        }
    }));
});

gulp.task('watch', function() {
    gulp.watch('*.scss', ['sass']).on('unlink', function(filepath) {
        remember.forget('sass', path.resolve(filepath));
        delete cached.caches.sass[path.resolve(filepath)];
    });
});

gulp.task('server', function() {
    browsersync.init({
        server: './'
    });

    browsersync.watch('*.scss').on('change', browsersync.reload);
});

gulp.task('default', ['sass', 'watch', 'server']);