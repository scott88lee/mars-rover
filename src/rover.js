var Rover = class {
	constructor(initialLocation, initialDirection) {
		// initialLocation = "13 18"
		// desired initialLocation = [13, 18]
		var initLocArr_str = initialLocation.split(' ');
		var initLocArr_int = initLocArr_str.map((val) => parseInt(val));
		if (initLocArr_int.length == 1){
			initLocArr_int.push(initLocArr_int[0])
		} else if (initLocArr_int.length > 2) {
			initLocArr_int = initLocArr_int.slice(0, 2);
		}
		this.initialLocation = initLocArr_int;
		this.initialDirection = initialDirection;

		this.currentLocation = initLocArr_int;
	}

	move(aCommand) {

	}
}

// function Rover(initialLocation) {
  
//   //this.initialDirection = initialDirection;
// }


module.exports = Rover;