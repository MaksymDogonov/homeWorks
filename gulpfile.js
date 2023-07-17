const { parallel } = require('gulp');

const function1 = (done) => {
    console.log('function1');
    done()
};

const function2 = (done) => {
    console.log('function2');
    done()
};

const function3 = (done) => {
    console.log('function3');
    done()
};

exports.default = parallel(function1,function2,function3);

exports.layoutCompile = parallel(function2,function3);
exports.assetsOptimize = function1;