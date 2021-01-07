const Contact = require('../models/contact');
const response = require('../util/response');

module.exports = (router) => router

// Contacts

.post('/contacts', async (ctx) => {
    let contact = Contact.fromJson(ctx.request.body);
    contact = await Contact.query().insert(contact);
    ctx.body = response.ok({ contact: contact.toJSON() });
})

.delete('/contacts/:contactId', async (ctx) => {
    ctx.body = response.ok();
})

.get('/contacts/:contactId', async (ctx) => {
    ctx.body = response.ok();
})

.put('/contacts/:contactId', async (ctx) => {
    ctx.body = response.ok();
})

.get('/contacts', async (ctx) => {
    ctx.body = response.ok();
})

// Contact's phone numbers

.post('/contacts/:contactId/phone_numbers', async (ctx) => {
    ctx.body = response.ok();
})

.delete('/contacts/:contactId/phone_numbers/:numberId', async (ctx) => {
    ctx.body = response.ok();
})

.put('/contacts/:contactId/phone_numbers/:numberId', async (ctx) => {
    ctx.body = response.ok();
})

.get('/contacts/:contactId/phone_numbers', async (ctx) => {
    ctx.body = response.ok();
})
