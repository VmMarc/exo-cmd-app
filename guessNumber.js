const readlineSync = require('readline-sync')
const chalk = require('chalk')

const MAX_CHANCES = 6

if (process.argv.length !== 3) {
  console.log('usage: node guessNumber.js secretNumber')
  process.exit(1)
  }else if (isNaN(process.argv[2])){
  console.log(`Error: Sorry "${process.argv[2]}" must be a number.`)
  process.exit(1)
  }else{
  isRunning = true
  counter = 1
  }

const secretNumber = Number(process.argv[2])

while (isRunning){
  console.log(chalk.bold(`\nYou have ${counter}/6 tries to guess the right number.\n`))
  const userNb = readlineSync.question(chalk.magenta.underline.bold('What\'s the right number? '))
  const userGuess = Number(userNb)
  ++counter

  if (isNaN(userGuess)){
  console.log(`Error: ${process.argv[2]} is not a number`)
  process.exit(1)
  }

if (userGuess > secretNumber){
  console.log ( chalk.red.bold('Too big!'))
}else if (userGuess < secretNumber){
  console.log (chalk.red.bold('Too small!'))
}else{
  console.log (chalk.green.bold.underline('You win!\n'))
  isRunning = false
}

if (counter === MAX_CHANCES) {
  console.log('Game Over!')
  isRunning = false
}
}
