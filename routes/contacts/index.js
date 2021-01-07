
module.exports = (router) => {

    return router

        // Contacts
        .post('/contacts', require('./contact_create'))
        .delete('/contacts/:contactId', require('./contact_delete'))
        .get('/contacts/:contactId', require('./contact_fetch'))
        .put('/contacts/:contactId', require('./contact_update'))
        .get('/contacts', require('./contacts_list'))


        // Contact's phone numbers
        .post('/contacts/:contactId/phone_numbers', require('./phone_number_create'))
        .delete('/contacts/:contactId/phone_numbers/:numberId', require('./phone_number_delete'))
        .put('/contacts/:contactId/phone_numbers/:numberId', require('./phone_number_update'))
        .get('/contacts/:contactId/phone_numbers', require('./phone_numbers_list'))

};
