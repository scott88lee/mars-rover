const {
  NORTH,
  SOUTH,
  WEST,
  EAST,
  turnLeft,
  turnRight,
  oppositeOf,
  isValidDirection
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

  test("opposite direction", () => {
    expect(oppositeOf(NORTH)).toEqual(SOUTH);
    expect(oppositeOf(SOUTH)).toEqual(NORTH);
    expect(oppositeOf(WEST)).toEqual(EAST);
    expect(oppositeOf(EAST)).toEqual(WEST);
  });

  test("get opposite with invalid direction should lead to error thrown", () => {
    expect(() => oppositeOf("garbage")).toThrowError(Error);
  });

  test("valid direction", () => {
    expect(isValidDirection(NORTH)).toBeTruthy();
    expect(isValidDirection(SOUTH)).toBeTruthy();
    expect(isValidDirection(WEST)).toBeTruthy();
    expect(isValidDirection(EAST)).toBeTruthy();
  });

  test("invalid direction", () => {
    expect(isValidDirection("garbage")).toBeFalsy();
    expect(isValidDirection("")).toBeFalsy();
    expect(isValidDirection(null)).toBeFalsy();
    expect(isValidDirection(undefined)).toBeFalsy();
  });
});
