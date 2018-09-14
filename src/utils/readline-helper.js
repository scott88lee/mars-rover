const readline = require("readline");

const ioHelper = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getUserInput(question) {
  return new Promise(resolve => {
    ioHelper.question(question, answer => {
      resolve(answer);
    });
  });
}

function cleanUp() {
  ioHelper.close();
}
module.exports = {
  cleanUp,
  getUserInput
};
