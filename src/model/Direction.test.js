const {
  NORTH,
  SOUTH,
  WEST,
  EAST,
  turnLeft,
  turnRight
} = require("./Direction");

describe("Test for Direction", () => {
  test("turn left with valid arguments", () => {
    expect(turnLeft(NORTH)).toEqual(WEST);
    expect(turnLeft(WEST)).toEqual(SOUTH);
    expect(turnLeft(SOUTH)).toEqual(EAST);
    expect(turnLeft(EAST)).toEqual(NORTH);
  });
  test("turn left with invalid direction should lead to error thrown", () => {
    expect(() => turnLeft("garbage")).toThrowError(Error);
  });

  test("turn right with valid arguments", () => {
    expect(turnRight(NORTH)).toEqual(EAST);
    expect(turnRight(EAST)).toEqual(SOUTH);
    expect(turnRight(SOUTH)).toEqual(WEST);
    expect(turnRight(WEST)).toEqual(NORTH);
  });

  test("turn right with invalid direction should lead to error thrown", () => {
    expect(() => turnRight("garbage")).toThrowError(Error);
  });
});
