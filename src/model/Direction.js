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

function turnLeft(currentDirection) {
  if (!(currentDirection in LEFT_TURN_MAP)) {
    throw new Error("Invalid direction " + currentDirection);
  }
  return LEFT_TURN_MAP[currentDirection];
}

function turnRight(currentDirection) {
  if (!(currentDirection in RIGHT_TURN_MAP)) {
    throw new Error("Invalid direction " + currentDirection);
  }
  return RIGHT_TURN_MAP[currentDirection];
}

module.exports = {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  turnLeft,
  turnRight
};
