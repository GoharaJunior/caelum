// Adiciona os modulos estalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Função para compilar o SASS 
function compilaSass() {
  return gulp
  .src('css/scss/**/*.scss')
  .pipe(sass({
    outputStyle: 'expanded'
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
}

// Tarefa de Gulp para função de SASS
gulp.task('sass', compilaSass);

// Função para iniciar o Browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"    
    }
  });
}

// Tarefa para iniciar o Browser-sync
gulp.task('browser-sync', browser);

// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/**/*.scss', compilaSass);
  gulp.watch('*.html').on('change', browserSync.reload);
}

// Inicia a tarefa de Watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o Watch e o Browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync'));