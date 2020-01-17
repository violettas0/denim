var gulp = require("gulp");
var postcss= require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var plumber = require("gulp-plumber");
var autoprefixer = require("autoprefixer");
var include = require("posthtml-include");
var sass = require("gulp-sass");
var server = require("browser-sync").create();

sass.compiler = require('node-sass');

function html() {
    return gulp.src("*.html")
        .pipe(posthtml([include()]))
        .pipe(gulp.dest("build"));
}

function style() {
    return(
        gulp.src("./sass/**/*.scss")
            .pipe(plumber())
            .pipe(sass())
            .pipe(sass().on("error", sass.logError))
            .pipe(postcss([
                autoprefixer()
            ]))
            .pipe(gulp.dest("./css"))
            .pipe(server.stream())
    )
}
function serve() {
   server.init({
       server: ".",
       notify: false,
       open: true,
       cors: true,
       ui: false
   });
   gulp.watch("sass/**/*.{scss, sass}", style);
   gulp.watch("*.html").on("change", server.reload);
}

exports.serve = serve;
exports.style = style;
exports.html = html;