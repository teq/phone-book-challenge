const { Model } = require('objection');

const Contact = require('./contact');

class PhoneNumber extends Model {

    static get tableName() {
        return 'phone_numbers';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['contact_id', 'value', 'kind'],
            properties: {
                id: { type: 'integer' },
                contact_id: { type: 'integer' },
                value: { type: 'string' }, // TODO: add validation
                kind: { type: 'string' }, // TODO: maybe restrict to a predefined set: home, work, other.
            }
        };
    }

    static get relationMappings() {
        return {
            contact: {
                relation: Model.BelongsToOneRelation,
                modelClass: Contact,
                join: {
                    from: 'phone_numbers.contact_id',
                    to: 'contacts.id'
                }
            }
        };
    }

}

module.exports = PhoneNumber;
