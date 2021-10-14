import "@babel/polyfill";
const validURL = require('./urlChecker');

describe("Checking this function exist or not", () => {
  test("OUTPUT should be exist this fun -> ", async () => {
    expect(validURL).toBeDefined();
  });
});
