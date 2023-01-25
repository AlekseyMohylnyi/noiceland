const html = () => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe($.gp.fileInclude())
        .pipe($.gp.webpHtml())
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gulp.dest($.path.html.dest))
}

module.exports = html;