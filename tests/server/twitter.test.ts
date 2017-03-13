import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../server/index';

chai.use(chaiHttp);
const expect = chai.expect;


describe('twitter feed rightwing', () => {
    it('it should be a status of 200 and it should return JSON', () => {
        return chai.request(app).get('/api/twitterfeed/rightwing')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.type).to.equal('application/json');
            });
    });
});

describe('twitter feed lefttwing', () => {
    it('it should be a status of 200 and it should return JSON', () => {
        return chai.request(app).get('/api/twitterfeed/leftwing')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.type).to.equal('application/json');
            });
    });
});
