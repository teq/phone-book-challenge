const { createJwt } = require('../util/jwt');
const response = require('../util/response');

module.exports = (router) => router

// JWT Authentication

.get('/auth/jwt', async (ctx) => {
    ctx.body = response.ok({ jwt: await createJwt() });
});
