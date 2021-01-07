const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('/', async (ctx) => {

    ctx.body = { status: 'ok' };

});

module.exports = router.routes();
