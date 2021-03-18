let name = process.argv[2]

if (process.argv.length !== 3) {
  console.log(`usage: node sayHello.js name`)
  process.exit(1)
}
if (!isNaN(process.argv[2])){
  console.log(`error: ${name} is a number`)
  process.exit(1)
}

console.log(`My name is ${name}!`)
