global.$ = {

    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),

    path: require("./config/path"),
    app: require("./config/app")
}

const html  = require("./tasks/html");
const css   = require("./tasks/css");
const scss  = require("./tasks/scss");
const clear = require("./tasks/clear");
const js    = require("./tasks/js");
const img   = require("./tasks/img");
const font  = require("./tasks/font");
const server  = require("./tasks/server");

const watcher = () => {
    $.gulp.watch($.path.html.watch, html).on("all", $.browserSync.reload);
    $.gulp.watch($.path.css.watch,   css).on("all", $.browserSync.reload);
    $.gulp.watch($.path.js.watch,     js).on("all", $.browserSync.reload);
    $.gulp.watch($.path.img.watch,   img).on("all", $.browserSync.reload);
    $.gulp.watch($.path.font.watch, font).on("all", $.browserSync.reload);
}

const build = $.gulp.series(
    clear,
    $.gulp.parallel(html, css, js, img, font)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, server)
);

exports.html  = html;
exports.watch = watcher;
exports.clear = clear;
exports.css   = css;
exports.js    = js;
exports.img   = img;
exports.font  = font;

exports.default = $.app.isProd
? build
: dev;
