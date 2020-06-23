var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCss = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var browserSync = require('browser-sync').create()

sass.compiler = require('node-sass')

gulp.task("sass", function () {
    return gulp.src("src/css/app.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(
            cleanCss({
                compatability: 'ie8'
            })
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream())
})

gulp.task("watch", function () {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })
    gulp.watch("src/css/app.scss", gulp.series("sass"))
})

gulp.task('default', gulp.series("sass", "watch"))