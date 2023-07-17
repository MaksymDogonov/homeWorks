const development = require('../gulpfile.js').development;

development();

const server = require('../gulpfile.js').server;

server(() => {
    console.log('done');
});