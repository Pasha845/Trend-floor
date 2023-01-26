const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixers = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const imagewebp = require('gulp-webp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
}

const normalize = () => {
  return src('src/css/**/normalize.css')
    .pipe(dest('dist/css'))
}

const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}

const libs = () => {
  return src('src/libs/**')
    .pipe(dest('dist/libs'))
}

const styles = () => {
  return src('src/css/**/style.css')
    .pipe(sourcemaps.init())
    .pipe(concat('css/style.css'))
    .pipe(autoprefixers({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
  return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/img'))
}

const img = () => {
  return src([
    'src/img/**/*.jpg',
    'src/img/**/*.png',
    'src/img/*.svg',
    'src/img/**/*.jpeg'
  ])
  .pipe(image())
  .pipe(dest('dist/img'))
}

const webpImages = () => {
  return src([
    'src/img/webp/**/*.{jpg,png}'
  ])
  .pipe(imagewebp())
  .pipe(dest('dist/img'))
}

const scripts = () => {
  return src([
    'src/js/**/*.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify({
    toplevel: true
  }
  ).on('error', notify.onError))
  .pipe(sourcemaps.write())
  .pipe(dest('dist/js'))
  .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify)
watch('src/css/**/*.css', styles)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/normalize.css', normalize)
watch('src/resources/**', resources)
watch('src/libs/**', libs)

exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(clean, normalize, resources, libs, htmlMinify, scripts, styles, svgSprites, img, webpImages, watchFiles)
exports.build = series(clean, normalize, resources, libs, svgSprites, img, webpImages, watchFiles)