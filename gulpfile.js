var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('assets/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src('assets/img/**/*')
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.reload({stream: true}))

});

gulp.task("html", function () {
    return gulp.src("assets/**/*.html")
        .pipe(gulp.dest("build"))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task("watch", [ 'sass', "html", 'img'], function () {
    browserSync.init({
        server: "./build",
        notify: false,
        ui: {
            port: 3000
        }
    });
    gulp.watch('assets/sass/**/*.sass', ["sass"]);
    gulp.watch('assets/**/*.html' , ['html']);
    gulp.watch('assets/img/**/*', ["img"]);
});