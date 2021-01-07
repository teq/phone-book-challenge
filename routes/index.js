const KoaRouter = require('koa-router');

const auth = require('./auth');
const contacts = require('./contacts');
const { parseJwt } = require('../jwt');

const router = new KoaRouter();

auth(router);
router.use(parseJwt); // <-- all routes below this line require JWT auth
contacts(router);

module.exports = router.routes();
