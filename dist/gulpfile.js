const { src, dest, series } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Minificar HTML
function minificarHTML() {
  return src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

// Minificar HTML 2
function minificarHTML2() {
  return src('HTML/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/HTML'));
}

// Minificar CSS
function minificarCSS() {
  return src('Proyect1.css')
    .pipe(cleanCSS())
    .pipe(dest('dist'));
}

// Copiar JavaScript, imágenes, íconos, etc.
function copiarOtrosArchivos() {
  return src([
    '*.js',
    'Pictures/**/*.{png,jpg,jpeg,gif,svg,mp4,webp}',
    'PDF/**/*.pdf',
    '*.ico'
  ], { base: '.' })
  .pipe(dest('dist'));
}


// Tarea por defecto
exports.default = series(minificarHTML, minificarHTML2, minificarCSS, copiarOtrosArchivos);
