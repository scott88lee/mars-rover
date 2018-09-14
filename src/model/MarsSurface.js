// TODO: rename to MarsMap?
module.exports = class MarsSurface {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // TODO: write tests for this
  isWithinBoundary(location) {
    return (
      location.x >= 0 &&
      location.y >= 0 &&
      location.x < this.width &&
      location.y < this.height
    );
  }
};
