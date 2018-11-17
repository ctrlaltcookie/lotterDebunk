const lottery = require('./lottery');

/**
 * Let's play the lottery! Runs x plays per week, with x lines per play, for x years
 * @param {number} tickets - Number of tickets you want to play
 * @param {number} lines - Number of lines per ticket you want to play
 * @param {number} years - Number of years you want to play for
 */
const playBulk = function (tickets, lines, years) {
  let wins = 0;

  // number of years to play
  for (let j = 0; j < years; j++) {
    for (let w = 0; w < 52; w++) {
      for (let i = 0; i < 52; i++) {
        for (let t = 0; t < tickets; t++) {
          const winningNumbers = lottery.getNumbers();
          const playResult = lottery.play(lines, winningNumbers);
          wins += playResult;
        }
      }
    }
  }
  const cost = (lines * tickets * 52 * years) * 2;
  console.log(`You played the lottery ${lines * tickets * 52 * years} times in ${years} years and managed to win: ${wins} times, this cost you £${cost}`);
}

console.log('Lets play the lottery 1 time a week, with 7 lines, for 1 year');
playBulk(1, 7, 1);
console.log();
console.log('Lets play the lottery 10 times a week, with 7 lines, for 1 year');
playBulk(10, 7, 1);
console.log();
console.log('Lets play the lottery 10 time a week, with 7 lines, for 80 years');
playBulk(10, 7, 80);
console.log('Lets play the lottery 1000 time a week, with 7 lines, for 800 years');
playBulk(1000, 7, 800);