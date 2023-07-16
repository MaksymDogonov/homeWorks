const { src, dest} = require('gulp');

const build = () => {
    return src([
        'dist/index.html',
        'dist/pages/*.html',
        'dist/scss/**/*',
        '!dist/scss/common/index.html.scss',
    ] )
        .pipe(dest('build'));
}

exports.default = build;