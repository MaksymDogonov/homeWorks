'use strict';
const APP = 'app';
let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));
let cleanCSS = require('gulp-clean-css');
let autoprefixer = require('gulp-autoprefixer');
let rename = require('gulp-rename');
let sourcemaps = require('gulp-sourcemaps');
const pug = require('gulp-pug');
const {parallel} = require("gulp");
const browserSync = require('browser-sync').create();

function buildStyles() {
    return gulp.src(`./${APP}/scss/pages/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['node_modules'],
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(
            // Optional if you want to see not minified CSS file
            gulp.dest(`./${APP}/styles`)
        )
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(`./`))
        .pipe(gulp.dest(`./${APP}/styles`));
}


const buildSass = () => {
    return gulp.src('./${APP}/scss/pages/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(`./${APP}/styles`))
        .pipe(browserSync.stream());
};

const buildPug = () => {
    return gulp.src('./${APP}/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest(`./${APP}/styles`))
        .pipe(browserSync.stream());
}; //we don't have pug fail in our project

const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });

    watch('./${APP}/scss/pages/*.scss', buildSass);
    watch('./${APP}/**/*.pug', buildPug);
};


exports.development = parallel(buildSass, buildPug);
exports.server = browserSyncJob;

exports.buildStyles = buildStyles;
exports.default = async function () {
    gulp.watch(`./${APP}/scss/**/*.scss`, gulp.series(buildStyles));
};
