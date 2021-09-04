const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const gulpSass = require('gulp-sass');
const nodeSass = require('node-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const csso = require('postcss-csso');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const squoosh = require('gulp-libsquoosh');
const webp = require('gulp-webp');
const del = require('del');
const sass = gulpSass(nodeSass);

// Styles

const styles = () => {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());
}

exports.styles = styles;

// HTML

const html = () => {
  return gulp.src('source/*.html')
    .pipe(htmlmin ({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
}

exports.html = html;

// Scripts

const scripts = () => {
  return gulp.src(['source/js/*.js', '!source/js/main.js'])
    .pipe(terser())
    .pipe(gulp.dest('build/js'))
}

exports.scripts = scripts;

// script main.js

const scriptMain = () => {
  return gulp.src('source/js/main.js')
    .pipe(terser())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('build/js'))
}

exports.scriptMain = scriptMain;

// Images

const optimazeImages = () => {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
    .pipe(squoosh())
    .pipe(gulp.dest('build/img'));
}

exports.optimazeImages = optimazeImages;

const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png,svg}')
    .pipe(gulp.dest('build/img'));
}

exports.copyImages = copyImages;

// Webp

const createWebp = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('build/img'))
}

exports.createWebp = createWebp;

// Copy

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}',
    'source/*.ico',
    'source/manifest.webmanifest',
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'))
  done();
}

exports.copy = copy;

// Clean

const clean = () => {
  return del('build');
}

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series('styles'));
  gulp.watch('source/*.html').on('change', sync.reload);
}

//Build

const build = gulp.series (
  clean,
  copy,
  optimazeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    scriptMain,
    createWebp
  ),
)

exports.build = build;

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    scriptMain,
    createWebp
  ),
    gulp.series(
      server,
      watcher
  ));
