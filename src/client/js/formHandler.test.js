import "@babel/polyfill";
const handleSubmit = require('./formHandler');

describe("Checking this function exist or not", () => {
  test("OUTPUT should be exist this fun -> ", async () => {
    expect(handleSubmit).toBeDefined();
  });
});
