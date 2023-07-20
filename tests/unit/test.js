//Import test dependencies
var server = require('../../server');
var adminServer = require('../../admin-server');
var request = require('supertest');

//Define baseURL
var userURL = "http://localhost:3000";
var adminURL = "http://localhost:3001";


describe("Test GET on user index endpoint", () => {
    it("should return 200 on index", async () => {
        var response = await request(userURL).get("/");
        expect(response.statusCode).toBe(200);
    })
    afterAll(async () => {
        try {
            server.close();
        } catch (error) {
            console.error("There was an issue gracefully closing the server")
        }
    })
})

describe("Test GET on admin index endpoint", () => {
    it("should return 200 on index", async () => {
        var response = await request(adminURL).get("/");
        expect(response.statusCode).toBe(200);
    })
    afterAll(async () => {
        try {
            adminServer.close();
        } catch (error) {
            console.error("There was an issue gracefully closing the server")
        }
    })
})