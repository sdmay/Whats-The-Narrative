import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../../server/config/express";

chai.use(chaiHttp);
const expect = chai.expect;

describe('indexRoute "/" ', () => {

    it("it should be a status of 200", () => {
        return chai.request(app).get("/")
            .then(res => {
                expect(res.status).to.equal(200);
            });
    });

    it('it should return text/html', () => {
        return chai.request(app).get("/")
            .then(res => {
                expect(res.type).to.equal('text/html');
            });
    });
});
