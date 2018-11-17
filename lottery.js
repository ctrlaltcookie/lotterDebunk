/**
 * Choose 6 numbers, between 1 and 59
 * decide how many lines you want to play, there are 7 per pay slip
 * each line costs £1
 */

/**
 * Returns a random number between 1 and max;
 */
function getRand(max) {
  return Math.floor(Math.random() * (max) + 1);
}

/**
 * Returns an array of 6 numbers that are randomly chosen and exclusive
 * @returns {number[]}
 */
const getNumbers = function () {
  const sixNumbers = [];
  for(let i = 0; i < 6; i++) {
    let generateNew = true;
    while (generateNew) {
      const newNumber = getRand(59);
      if (sixNumbers.indexOf(newNumber) === -1) {
        sixNumbers.push(newNumber);
        generateNew = false;
      }
    }
  }
  return sixNumbers;
};

/**
 * Generates a random lottery play per line requested and compares against winning numbers
 * passed in. Cannot have more than 7 lines.
 *
 * @param {number} lines 
 * @param {numer[]} winningNumbers 
 * @returns {string} Wins and losses represented as W or x
 */
const play = function (lines = 1, winningNumbers) {
  if (lines > 7) {
    lines = 7;
  };
  let wins = 0;
  for (let i = 0; i < lines; i++) {
    const line = getNumbers()
    if (JSON.stringify(line) === JSON.stringify(winningNumbers)) {
      wins++;
    }
  }
  return wins;
}

module.exports = {
  play,
  getNumbers
}
