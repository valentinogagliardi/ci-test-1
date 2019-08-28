const mapping = require("../mapping");

describe("A silly mapping function", () => {
  test("it should return an array of objects given an array of numbers", () => {
    // input
    // output
    const input = [1, 2, 3];
    //
    const output = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    //
    expect(mapping(input, "object")).toEqual(output);
  });
});
