const parallel = require('../gulpfile.js').default;

parallel();

const parallel2 = require('../gulpfile.js').layoutCompile;

parallel2();

const assetsOptimize = require('../gulpfile.js').assetsOptimize;

assetsOptimize(() => {
    console.log('done');
});