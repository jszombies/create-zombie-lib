'use strict';

const chalk = require('chalk');

function printRainbowMessage(message) {
  const colors = ['red', 'redBright', 'yellow', 'green', 'blueBright', 'blue'];

  const colorfullMessage = message.split('').map((letter, index) => {
    let colorIndex = index;
    if (colorIndex > colors.length - 1) {
      colorIndex =
        colorIndex - Math.floor(colorIndex / colors.length) * colors.length;
    }
    const color = colors[colorIndex];
    const printColor = chalk[color];

    return printColor(letter);
  });

  console.log(colorfullMessage.join(''));
}

module.exports = {
  printRainbowMessage,
};
