const chai = require('chai');
const faker = require('faker');

const { request, authorize } = require('../helpers');

const { expect } = chai;

describe('contact create', () => {

    const contactFields = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress()
    };

    context('when unauthenticated', () => {

        it('should return an error', async () => {
            const res = await request()
                .post('/contacts')
                .send(contactFields);
            expect(res).to.have.status(401);
            expect(res.body).to.deep.include({ status: 'error' });
        });

    });

    context('when authenticated', () => {

        it('should create a new contact', async () => {

            const jwt = await authorize();
            const res = await request()
                .post('/contacts')
                .set('Authorization', `Bearer ${jwt}`)
                .send(contactFields);
            expect(res).to.have.status(200);
            expect(res.body).to.deep.include({ status: 'ok' });
            const { contact } = res.body;
            expect(contact).to.deep.include(contactFields);
            expect(contact.id).to.be.greaterThan(0);

        });

    });

});

describe('contact delete', () => {});

describe('contact fetch', () => {});

describe('contact list', () => {});

describe('contact update', () => {});
