const response = require('./response');
const logger = require('./logger');

class AuthenticationError extends Error {}
class BadRequestError extends Error {}
class NotFoundError extends Error {}

/** Error handler middleware */
async function errorHandler(ctx, next) {

    try {

        await next();

    } catch (error) {

        if (error instanceof AuthenticationError) {
            ctx.status = 401;
            ctx.body = response.error(error.message);
        } else if (error instanceof BadRequestError) {
            ctx.status = 400;
            ctx.body = response.error(error.message);
        } else if (error instanceof NotFoundError) {
            ctx.status = 404;
            ctx.body = response.error(error.message);
        } else {
            // All other error are "unexpected" and should be logged
            logger.error('Request processing error', error);
            ctx.status = 500;
            ctx.body = response.error('Internal Server Error');
        }

    }

}

module.exports = {
    AuthenticationError,
    BadRequestError,
    NotFoundError,
    errorHandler
};
