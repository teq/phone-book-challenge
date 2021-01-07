const { createJwt } = require('../../jwt');
const response = require('../../util/response');

module.exports = async (ctx) => {

    ctx.body = response.ok({ jwt: await createJwt() });

};
