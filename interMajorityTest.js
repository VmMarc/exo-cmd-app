const readlineSync = require('readline-sync')
const chalk = require('chalk')

const MAX_VOTERS = 1

let interAge = process.argv[2] 

if (process.argv.length !== 3) {
  console.log('usage: node interMajorityTest.js âge')
  process.exit(1)
}

if (isNaN(interAge)){
  console.log(`Erreur: Désolé "${interAge}" n\'est pas un age...`)
  process.exit(1)
}else{
  isRunning = true
  counter = 0
}

while (isRunning) {
  console.log('Bonjour.')
  const userFirstName = readlineSync.question('Quel est votre prenom? ')
  const userName = readlineSync.question('Quel est votre nom de famille? ')
  const ageStr = readlineSync.question('Quel âge avez-vous ? ')
  const age = Number(ageStr)

  if (age >= interAge) {
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