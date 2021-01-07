const { Model } = require('objection');

const PhoneNumber = require('./phone_number');

class Contact extends Model {

    static get tableName() {
        return 'contacts';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email', 'address'],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' }, // TODO: add validation
                email: { type: 'string' }, // TODO: add validation
                address: { type: 'string' }, // TODO: add validation
            }
        };
    }

    static get relationMappings() {
        return {
            phoneNumbers: {
                relation: Model.HasManyRelation,
                modelClass: PhoneNumber,
                join: {
                    from: 'contacts.id',
                    to: 'phone_numbers.contact_id'
                }
            }
        };
    }

}

module.exports = Contact;
