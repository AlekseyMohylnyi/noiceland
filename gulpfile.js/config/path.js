const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest,
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css",
    },

    scss: {
        src: pathSrc + "/scss/*.{sass,scss}",
        watch: pathSrc + "/scss/**/*.{sass,scss}",
        dest: pathDest + "/css",
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js",
    },

    img: {
        src: pathSrc + "/img/**/*.{png,jpeg,jpg,svg,gif}",
        watch: pathSrc + "/img/**/*.{png,jpeg,jpg,svg,gif}",
        dest: pathDest + "/img",
    },

    font: {
        src: pathSrc + "/font/*.{eot,woff,woff2,ttf,otf,otc,ttc,svg}",
        watch: pathSrc + "/font/**/*.{eot,woff,woff2,ttf,otf,otc,ttc,svg}",
        dest: pathDest + "/font",
    },
}