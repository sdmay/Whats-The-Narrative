import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../../server/index";

chai.use(chaiHttp);
const expect = chai.expect;


describe('angular home route "/" ', () => {
    it("it should be a status of 200 and it should return text/html", () => {
        return chai.request(app).get("/home")
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.type).to.equal('text/html');
            });
    });
});

describe('angular register route "/" ', () => {
    it("it should be a status of 200 and it should return text/html", () => {
        return chai.request(app).get("/register")
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res.type).to.equal('text/html');
            });
    });
});