import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../../server/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe('register user authenication route that already EXISTS', () => {
    it("it should be a status of 200, return JSON, and should the JSON object should have data and status keys", () => {
        return chai.request(app)
        .post("/api/userauth/registeruser")
        .send({name: "Mike", password: "123"})
        .then(res => {
            expect(res.status).to.equal(200);
            expect(res.type).to.equal("application/json");
            expect(res.body).to.be.an('object');
            expect(res.body.status).to.equal(422);
            expect(res.body).to.have.all.keys([
                "data",
                "status"
            ])
        });
    });
});


// this is going to fail if the user is already in the database, but it worked on the first go. 
// commenting it out for the rest of the project. feel free to uncomment and put in a new username to test

// describe('register user authenication route that already DOES NOT EXIST', () => {
//     it("it should be a status of 200, return JSON, and should the JSON object should have data and status keys", () => {
//         return chai.request(app)
//         .post("/api/userauth/registeruser")
//         .send({name: "test username", password: "123"})
//         .then(res => {
//             expect(res.status).to.equal(200);
//             expect(res.type).to.equal("application/json");
//             expect(res.body).to.be.an('object');
//             expect(res.body.status).to.equal(200);
//             expect(res.body).to.have.all.keys([
//                 "data",
//                 "status"
//             ])
//         });
//     });
// });