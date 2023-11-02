function guessingGame() {
  let numOfGuesses = 0
  let isWon = false
  const randomNum = Math.floor(Math.random() * 100)

  return function (guess) {
    if (isWon) return `The game is over, you already won!`

    if (guess === randomNum) {
      numOfGuesses++
      isWon = true
      return `You win! You found ${randomNum} in ${numOfGuesses} guesses!`
    } else if (randomNum < guess) {
      numOfGuesses++
      return `${guess} is too high!`
    } else {
      numOfGuesses++
      return `${guess} is too low!`
    }
  }
}
