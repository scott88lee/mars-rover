const Location = require("./Location");
const Direction = require("./Direction");
const RoverPosition = require("./RoverPosition");
const MarsSurface = require("./MarsSurface");

describe("Unit tests for Rover", () => {
  test("create instance of rover", () => {
    let location = new Location(0, 0);
    let direction = Direction.NORTH;
    let currentPosition = new RoverPosition(location, direction);
    expect(currentPosition.location).toEqual(location);
    expect(currentPosition.direction).toEqual(direction);
  });

  test("turn left", () => {
    let currentLocation = new Location(0, 0);
    let currentDirection = Direction.NORTH;
    let currentPosition = new RoverPosition(currentLocation, currentDirection);

    let newPosition = currentPosition.turnLeft();

    expect(newPosition.direction).toEqual(Direction.WEST);
    expect(newPosition.location).toEqual(currentLocation);
  });

  test("turn right", () => {
    let currentLocation = new Location(0, 0);
    let currentDirection = Direction.NORTH;
    let currentPosition = new RoverPosition(currentLocation, currentDirection);

    let newPosition = currentPosition.turnRight();

    expect(newPosition.direction).toEqual(Direction.EAST);
    expect(newPosition.location).toEqual(currentLocation);
  });

  test("move forward within boundary", () => {
    let currentLocation = new Location(0, 0);
    let currentDirection = Direction.NORTH;
    let currentPosition = new RoverPosition(currentLocation, currentDirection);

    let surface = new MarsSurface(10, 10);
    let expectedNewLocation = new Location(0, 1);

    let newPosition = currentPosition.moveForward(surface);

    expect(newPosition.direction).toEqual(currentDirection);
    expect(newPosition.location).toEqual(expectedNewLocation);
  });

  test("move forward beyond the boundary", () => {
    let currentLocation = new Location(0, 9);
    let currentDirection = Direction.NORTH;
    let currentPosition = new RoverPosition(currentLocation, currentDirection);

    let surface = new MarsSurface(10, 10);

    let newPosition = currentPosition.moveForward(surface);

    expect(newPosition).toEqual(currentPosition);
  });
});
