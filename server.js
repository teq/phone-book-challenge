const logger = require('./util/logger.js');
const config = require('./config');
const apiServer = require('./api');

(async() => {

    try {

        const instance = apiServer.listen(config.port);

        logger.info(`Service started. Listening for incoming HTTP requests on port ${config.port}.`);

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
