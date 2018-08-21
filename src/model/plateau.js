class Plateau {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isSafeToMoveTo(location) {}

  addBeaconAt(location) {
    this.beaconLocations = [...this.beaconLocations, location];
  }
}
