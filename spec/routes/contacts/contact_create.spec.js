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

            const res = await request().post('/contacts');
            expect(res).to.have.status(200);
            expect(res.body).to.deep.include({
                status: 'ok'
            })

        });

    });

});
