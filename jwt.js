const { sign, verify } = require ('jsonwebtoken');
const { DateTime } = require("luxon");

const config = require('./config');
const { AuthenticationError } = require('./util/errors');

/** Create new JWT (not associated wit any user to keep things simple) */
async function createJwt() {

    const now = DateTime.utc();

    const payload = {
        iat: now.toSeconds(),
        exp: now.plus(config.jwt.lifetime).toSeconds(),
    };

    const token = await new Promise((resolve, reject) => {
        sign(payload, config.jwt.secret, { algorithm: config.jwt.algo }, (error, token) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        });
    });

    return token;

}

/** Koa middleware responsible for parsing and validating a JWT */
async function parseJwt(ctx, next) {

    const { authorization } = ctx.request.headers;

    if (typeof authorization !== 'string') {
        throw new AuthenticationError('Missing Authorization header');
    }

    const match = authorization.match(/^Bearer (.+)$/i);

    if (!match) {
        throw new AuthenticationError('Invalid Authorization header. Expecting: Bearer <JWT>');
    }

    const token = match[1];

    let jwt;

    try {
        jwt = await new Promise((resolve, reject) => {
            verify(token, config.jwt.secret, { algorithms: [ config.jwt.algo ] }, (error, payload) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(payload);
                }
            });
        });
    } catch (error) {
        throw new AuthenticationError(`JWT is not valid: ${error.message}`);
    }

    if (jwt.exp < DateTime.utc().toSeconds()) {
        throw new AuthenticationError('JWT expired');
    }

    ctx.state.jwt = jwt;

    await next();

}

module.exports = {
    createJwt,
    parseJwt
};
