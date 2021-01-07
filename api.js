const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Knex = require('knex');
const { Model } = require('objection');

const routes = require('./routes');
const knexConfig = require('./knexfile')
const { errorHandler } = require('./util/errors');

// Initialize knex
const knex = Knex(knexConfig);

// Bind all Models to a knex instance
Model.knex(knex);

// Create API server
const server = new Koa()
    .use(errorHandler)
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(routes);

module.exports = server;
