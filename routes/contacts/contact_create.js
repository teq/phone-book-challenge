const Contact = require('../../models/contact');
const response = require('../../util/response');

module.exports = async (ctx) => {

    let contact = Contact.fromJson(ctx.request.body);

    contact = await Contact.query().insert(contact);

    ctx.body = response.ok({ contact: contact.toJSON() });

};
