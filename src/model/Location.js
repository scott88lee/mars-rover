const { NORTH, SOUTH, EAST, WEST } = require("./Direction");

module.exports = class Location {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveForward(direction) {
    switch (direction) {
      case NORTH:
        return new Location(this.x, this.y + 1);
      case SOUTH:
        return new Location(this.x, this.y - 1);
      case EAST:
        return new Location(this.x + 1, this.y);
      case WEST:
        return new Location(this.x - 1, this.y);
    }
  }
  moveBackward(direction) {
    switch (direction) {
      case NORTH:
        return new Location(this.x, this.y - 1);
      case SOUTH:
        return new Location(this.x, this.y + 1);
      case EAST:
        return new Location(this.x - 1, this.y);
      case WEST:
        return new Location(this.x + 1, this.y);
    }
  }
};
