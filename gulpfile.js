const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg = require('imagemin-mozjpeg');
const extReplace = require('gulp-ext-replace');
const webp = require('imagemin-webp');
	 
gulp.task('imagemin', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      pngquant({quality: [0.5, 0.5]}),
      mozjpeg({quality: 50}),
    ]))
    .pipe(gulp.dest('src/assets/imgs/'));
});

gulp.task('webp', () => {
  return gulp.src('src/assets/imgs/*')
    .pipe(imagemin([
      webp({quality: 50})
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest('src/assets/imgs/'))
});


//responsive part
const { src, dest } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");

const img = () => src("src/assets/imgs/*")
  .pipe(sharpResponsive({
    formats: [
      // jpeg
      { width: 640, format: "jpeg", rename: { suffix: "-sm" } },
      { width: 768, format: "jpeg", rename: { suffix: "-md" } },
      { width: 1024, format: "jpeg", rename: { suffix: "-lg" } },
      // webp
      { width: 640, format: "webp", rename: { suffix: "-sm" } },
      { width: 768, format: "webp", rename: { suffix: "-md" } },
      { width: 1024, format: "webp", rename: { suffix: "-lg" } },
      // avif
      { width: 640, format: "avif", rename: { suffix: "-sm" } },
      { width: 768, format: "avif", rename: { suffix: "-md" } },
      { width: 1024, format: "avif", rename: { suffix: "-lg" } },
    ]
  }))
  .pipe(dest("src/assets/imgs/"));

module.exports = {
  img,
};