import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../server/index';

chai.use(chaiHttp);
const expect = chai.expect;

describe('indexRoute "/" ', () => {
    it('it should be a status of 200 and it should return text/html', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.type).to.equal('text/html');
            });
    });
});


