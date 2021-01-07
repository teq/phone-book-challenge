const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const logger = require('./util/logger.js');
const routes = require('./routes');

const server = new Koa()
    .use(bodyParser({ enableTypes: ['json'] }))
    .use(routes);

(async() => {

    try {

        const instance = server.listen(3000);

        logger.info('Service started. Listening for incoming HTTP requests.');

        // Wait for SIGTERM/SIGINT
        await new Promise(resolve => process.on('SIGTERM', resolve).on('SIGINT', resolve));

        logger.info('Stopping service. Awaiting for all pending requests to finish.');

        await new Promise((resolve, reject) => {
            instance.close(error => error ? reject(error) : resolve());
        });

        logger.info('Service stopped. Exiting.');

    } catch(e) {

        logger.error('Runtime error', e);

    }

})();
