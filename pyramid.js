const pyramid = (nbChar, char) => {
    if (process.argv[4] === '-r'){
      for (let i = nbChar; i >= 1; --i) {
        console.log(char.repeat(i)) 
      }
    }else if (process.argv.length === 4){ 
      for (let i = 1; i <= nbChar; i += 1) {
        console.log(char.repeat(i))
    }
  }
}

if (process.argv.length > 5) {
  console.log('usage: node pyramid.js number character (-r)')
  process.exit(1)
  }else if (process.argv.length < 4){
    console.log('usage: node pyramid.js number character')
    process.exit(1)
  }

if (isNaN(process.argv[2])) {
  console.log(`error: "${process.argv[2]}" is not a number.`)
  process.exit(1)
}

if (process.argv[3].length !== 1){
  console.log('error: Too many characters')
  process.exit(1)
} else if (process.argv[3] === '*'){
  console.log(`error: character "process.argv[3]" not supported.`)
  process.exit(1)
}

if((process.argv.length === 5) && (process.argv[4] !== '-r')){
  console.log('error: operator unknown, use "-r"')
  process.exit(1)
}

let nb = Number(process.argv[2])
let ch = (process.argv[3])
let op = (process.argv[4])
pyramid(nb, ch, op)