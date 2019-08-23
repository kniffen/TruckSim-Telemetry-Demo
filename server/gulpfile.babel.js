import gulp    from "gulp"
import plumber from "gulp-plumber"
import babel   from "gulp-babel"

function watch() {
  gulp.watch("src/**/*.js", {cwd: "./"}, gulp.series(build))
}

function build() {
  return gulp.src("src/**/*.js")
    .pipe(plumber())
    .pipe(babel({presets: ["@babel/env"]}))
    .pipe(gulp.dest("dist"))
}

exports.build = build
exports.watch = watch

exports.default = gulp.series(build, watch)