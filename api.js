const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const logger = require('./util/logger.js');
const routes = require('./routes');
const config = require('./config');

const server = new Koa()
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(routes);

module.exports = server;
