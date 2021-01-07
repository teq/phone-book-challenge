
module.exports = (router) => {

    return router

        // Authentication
        .get('/auth/jwt', require('./jwt'));

};
