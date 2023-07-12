//Import test dependencies
var server = require('../../server');
var request = require('supertest');

//Define baseURL
var baseURL = "http://localhost:3000";

jest.mock

describe("Test GET on index endpoint", () => {
    it("should return 200 on index", async () => {
        var response = await request(baseURL).get("/");
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