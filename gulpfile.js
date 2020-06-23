var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task("default", function () {
    return gulp.src("css/app.scss")
        .pipe(sass())
        .pipe(gulp.dest("."))
})
