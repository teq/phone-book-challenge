const KoaRouter = require('koa-router');

const contacts = require('./contacts');

const router = new KoaRouter();

// Register routes
contacts(router);

module.exports = router.routes();
