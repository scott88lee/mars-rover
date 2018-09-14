const MarsSurface = require("./MarsSurface");

describe("Mars Surface", () => {
  test("Create an instance with width and height", () => {
    let width = 1;
    let height = 5;
    let surface = new MarsSurface(width, height);
    expect(surface.width).toEqual(width);
    expect(surface.height).toEqual(height);
  });
});
