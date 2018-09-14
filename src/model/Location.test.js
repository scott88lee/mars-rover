const Location = require("./Location");

describe("Tests for Location", () => {
  test("create location with x and y coordinates", () => {
    let x = 0;
    let y = 0;
    let location = new Location(x, y);
    expect(location.x).toEqual(x);
    expect(location.y).toEqual(y);
  });
});
