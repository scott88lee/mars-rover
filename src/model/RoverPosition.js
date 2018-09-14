const Direction = require("./Direction");

module.exports = class RoverPosition {
  constructor(initLocation, initDirection) {
    // TODO: validate the arguments
    this.location = initLocation;
    this.direction = initDirection;
  }

  turnLeft() {
    return new RoverPosition(this.location, Direction.turnLeft(this.direction));
  }

  turnRight() {
    return new RoverPosition(
      this.location,
      Direction.turnRight(this.direction)
    );
  }

  // TODO: should map be a field in this position object?
  moveForward(map) {
    const newLocation = this.location.moveForward(this.direction);
    if (map.isWithinBoundary(newLocation)) {
      return new RoverPosition(newLocation, this.direction);
    } else {
      return this;
    }
  }
};
