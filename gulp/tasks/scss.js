import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

import GulpCleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupSccMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, {})
    .pipe(app.plugins.if(app.isBuild, sourcemaps.init()))
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      sass({
        outputStyle: 'expanded',
        includePaths: ['node_modules'],
      })
    )
    .pipe(app.plugins.if(app.isBuild, groupSccMediaQueries()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webpCss({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoPrefixer({
          grid: true,
          overrideBrowserlist: ['last 3 version'],
          cascade: true,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.css)) //якщо потрібен не мініфікований
    .pipe(app.plugins.if(app.isBuild, GulpCleanCss()))
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(app.plugins.if(app.isBuild, sourcemaps.write('./'), sourcemaps.write()))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};
