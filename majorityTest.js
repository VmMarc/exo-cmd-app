const readlineSync = require('readline-sync')
const chalk = require('chalk')

const MAX_VOTERS = 1

let isRunning = true
let counter = 0

while (isRunning) {
  console.log('Bonjour.')
  const userFirstName = readlineSync.question('Quel est votre prenom? ')
  const userName = readlineSync.question('Quel est votre nom de famille? ')
  const ageStr = readlineSync.question('Quel âge avez-vous ? ')
  const age = Number(ageStr)

  if (age >= 18) {
    ++counter
    console.log(chalk.green(`${userFirstName} ${userName},vous êtes majeur, vous pouvez voter.`))
  } else {
    console.log(chalk.red(`Désolé, ${userFirstName} ${userName}, vous êtes mineur, vous ne pouvez pas voter`))
  }
  if (counter = MAX_VOTERS) {
    isRunning = false
  }
}
console.log('Merci et à bientôt.')