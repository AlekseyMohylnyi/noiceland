const css = () => {
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))
        .pipe($.gp.concat("main.css"))
        .pipe($.gp.cssimport())
        // .pipe($.gp.webpCss()) хз надо разобраться почему не работает
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
        .pipe($.gp.csso())
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
}

module.exports = css;