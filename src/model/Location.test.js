const Location = require("./Location");
const { NORTH, SOUTH, EAST, WEST } = require("./Direction");

describe("Tests for Location", () => {
  test("create location with x and y coordinates", () => {
    let x = 0;
    let y = 0;
    let location = new Location(x, y);
    expect(location.x).toEqual(x);
    expect(location.y).toEqual(y);
  });
  test("move forward when facing north", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(0, 1);
    let currentDirection = NORTH;
    expect(currentLocation.moveForward(currentDirection)).toEqual(newLocation);
  });

  test("move backward when facing north", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(0, -1);
    let currentDirection = NORTH;
    expect(currentLocation.moveBackward(currentDirection)).toEqual(newLocation);
  });

  test("move forward when facing south", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(0, -1);
    let currentDirection = SOUTH;
    expect(currentLocation.moveForward(currentDirection)).toEqual(newLocation);
  });

  test("move backward when facing south", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(0, 1);
    let currentDirection = SOUTH;
    expect(currentLocation.moveBackward(currentDirection)).toEqual(newLocation);
  });

  test("move forward when facing east", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(1, 0);
    let currentDirection = EAST;
    expect(currentLocation.moveForward(currentDirection)).toEqual(newLocation);
  });

  test("move backward when facing east", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(-1, 0);
    let currentDirection = EAST;
    expect(currentLocation.moveBackward(currentDirection)).toEqual(newLocation);
  });

  test("move forward when facing west", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(-1, 0);
    let currentDirection = WEST;
    expect(currentLocation.moveForward(currentDirection)).toEqual(newLocation);
  });

  test("move backward when facing west", () => {
    let currentLocation = new Location(0, 0);
    let newLocation = new Location(1, 0);
    let currentDirection = WEST;
    expect(currentLocation.moveBackward(currentDirection)).toEqual(newLocation);
  });
});
