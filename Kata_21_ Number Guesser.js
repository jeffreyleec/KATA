let count = 1
let guessTracker = []
let answer = Math.floor(Math.random() * 10) + 1
let guess = parseInt(prompt("Guess a number:"));

while (guess != answer) {
  for (let i = 0; i < guessTracker.length; i++) {
    if (guess == guessTracker[i]) {
      console.log("Already Guessed!")
      guess = parseInt(prompt("Guess a number:"))

    }

  }
  if (guess < answer) {
    console.log("Too Low!")
    guess = parseInt(prompt("Guess a number:"));
    count++
    guessTracker.push(guess)

  } else if (guess > answer) {
    console.log("Too High!")

    guess = parseInt(prompt("Guess a number:"));
    count++
    guessTracker.push(guess)


  } else if (guess == answer) {
    console.log(`You got it! You took ${count} attempts!`)

  } else {
    console.log("NOT A NUMBER, TRY AGAIN!")
    guess = parseInt(prompt("Guess a number:"));
    count++
    guessTracker.push(guess)

  }


}

