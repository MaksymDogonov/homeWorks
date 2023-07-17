const { watch } = require('gulp');
const indexChanged = () => {
    console.log('index.scss has been changed')
};

const scssFolderChanged = () => {
    console.log('scss folder has been changed')
};

const distFolderChanged = () => {
    console.log('dist folder has been changed')
};
const watchers = () =>{
    watch('dist/scss/index.scss', { events: 'change'}, indexChanged);
    watch('dist/scss/', { events: ['add', 'unlink'] }, scssFolderChanged);
    watch('dist/', { events: ['addDir', 'unlinkDir'] }, distFolderChanged);
};

exports.watchers = watchers