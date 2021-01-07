const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Knex = require('knex');
const { Model } = require('objection');

const routes = require('./routes');
const knexConfig = require('./knexfile')

// Initialize knex
const knex = Knex(knexConfig);

// Bind all Models to a knex instance
Model.knex(knex);

const server = new Koa()
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(routes);

module.exports = server;
