const Rover = require('./rover');

test('Test normal input to Array', () => {
  let rover = new Rover("13 18");
  expect(rover.initialLocation).toEqual([13, 18]);
});


test('Test input 13 to be [13, 13]', () => {
  let rover = new Rover("13");
  expect(rover.initialLocation).toEqual([13, 13]);
});


test('Test input 13 14 15 to be [13, 14]', () => {
  let rover = new Rover("13 14 15");
  expect(rover.initialLocation).toEqual([13, 14]);
});

test('Test if rover object has initialDirection defined', () => {
	let rover = new Rover("13 14", "N");
	expect(rover.initialDirection).toEqual("N");
});

test('Test if currentLocation exists', () => {
	let rover = new Rover("13 14", "S");
	expect(rover.currentLocation).toEqual([13, 14]);
});

test('Test F command at 13, 14 N', () => {
	let rover = new Rover("13 14", "N");
	rover.move('F');
	expect(rover.currentLocation).toEqual([13, 15]);
});