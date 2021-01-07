const chai = require('chai');

const { request } = require('../helpers');

const { expect } = chai;

describe('token acquisition', () => {

    it('should return a new token', async () => {

        const res = await request().get('/auth/jwt');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.include({ status: 'ok' });
        const { jwt } = res.body;
        expect(jwt).to.be.string;

    });

});
