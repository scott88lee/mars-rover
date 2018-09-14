const NORTH = "N";
const SOUTH = "S";
const EAST = "E";
const WEST = "W";

const LEFT_TURN_MAP = {
  [NORTH]: WEST,
  [WEST]: SOUTH,
  [SOUTH]: EAST,
  [EAST]: NORTH
};

const RIGHT_TURN_MAP = {
  [NORTH]: EAST,
  [EAST]: SOUTH,
  [SOUTH]: WEST,
  [WEST]: NORTH
};

const OPPOSITE_DIRECTION_MAP = {
  [NORTH]: SOUTH,
  [SOUTH]: NORTH,
  [WEST]: EAST,
  [EAST]: WEST
};

function turnLeft(currentDirection) {
  validateDirection(currentDirection);
  return LEFT_TURN_MAP[currentDirection];
}

function turnRight(currentDirection) {
  validateDirection(currentDirection);
  return RIGHT_TURN_MAP[currentDirection];
}

function oppositeOf(currentDirection) {
  validateDirection(currentDirection);
  return OPPOSITE_DIRECTION_MAP[currentDirection];
}

function validateDirection(currentDirection) {
  if (!isValidDirection(currentDirection)) {
    throw new Error("Invalid direction " + currentDirection);
  }
}

function isValidDirection(direction) {
  return [NORTH, SOUTH, EAST, WEST].includes(direction);
}

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  turnLeft,
  turnRight,
  oppositeOf,
  isValidDirection
};
