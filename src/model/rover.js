const direction = require("./direction");
const command = require("./command");

const directionCommandHandler = {
  [command.LEFT]: direction.turnLeft,
  [command.RIGHT]: direction.turnRight
};

class Rover {
  constructor(initialLocation, initialDirection) {
    this.location = initialLocation;
    this.direction = initialDirection;
  }

  move(plateau, command) {
    // what if command not supported?
    // what if location and direction is unedfined

    if (command in directionCommandHandler) {
      this.direction = this.updateDirection(command);
    }

    if (command === command.FORWARD) {
      this.location = this.location.move(this.direction);
    }

    if (!plateau.isSafeToMoveTo(this.location)) {
      // what should I do?
    }
  }

  updateDirection(command) {
    this.direction = directionCommandHandler[command](this.direction);
  }
}

module.exports = Rover;
