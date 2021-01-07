/**
 * This file contains various helper functions used in tests
 */

const chai = require('chai');

const apiServer = require('../../api');

const { expect } = chai;

/** Run HTTP request against API server */
const request = () => chai.request(apiServer.callback());

/** Acquire authorization token */
async function authorize() {
    const res = await request().get('/auth/jwt');
    expect(res).to.have.status(200);
    return res.body.jwt;
}

module.exports = {
    request,
    authorize
};
