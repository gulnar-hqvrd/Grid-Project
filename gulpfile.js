const { src, dest, watch, series } = require('gulp');
const purgecss = require('gulp-purgecss');

const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(cssnano())
        .pipe(dest('css'));
}


function watchTask() {
    watch(['sass/**/*.scss' , '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);