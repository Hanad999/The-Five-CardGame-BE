const testData = require("../db/data/test-data");
const db = require("../db/connection");
import seed from "../db/seeds/seed";
const request = require("supertest");
const app = require("../src/app");

beforeEach(() =>
  seed(
    testData.accounts_data,
    testData.profiles_data,
    testData.abilities_data,
    testData.characters_data,
    testData.decks_data
  )
);
afterAll(async () => await db.end());

describe("GET response", () => {
  it("Should response 200 when just requested /api", async () => {
    const response = await request(app).get("/api").expect(200);
    // .then(({data}) => {
    //     expect(data).toBe()
    // })
  });
});
describe("GET all abilities", () => {
  it("Should return a single ability in the given format", async () => {
    const response = await request(app).get("/api/abilities").expect(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
// export default {};
