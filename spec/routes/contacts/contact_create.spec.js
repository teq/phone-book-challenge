const chai = require('chai');

const apiServer = require('../../../api');

const { expect } = chai;

const request = () => chai.request(apiServer.callback());

describe('contact creation', () => {

    context('when unauthenticated', () => {

        it('should return an error');

    });

    context('when authenticated', () => {

        it('should create a new contact', async () => {

            const contactFields = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                address: '---'
            };

            const res = await request().post('/contacts').send(contactFields);
            expect(res).to.have.status(200);
            expect(res.body).to.deep.include({ status: 'ok' });
            const { contact } = res.body;
            expect(contact).to.deep.include(contactFields);
            expect(contact.id).to.be.greaterThan(0);

        });

    });

});
