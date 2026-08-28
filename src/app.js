'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

const askGuess = () => {
  rl.question('Enter 4-digit number', (userInput) => {
    if (checkIsValidUserInput(userInput)) {
      if (+userInput === secretNumber) {
        console.log('You win!');
        rl.close();

        return;
      }

      const result = getBullsAndCows(+userInput, secretNumber);

      console.log(result);
    } else {
      console.log('Invalid number');
    }
    askGuess();
  });
};

askGuess();
