const pyramid = (nbChar, char) => {
    if (process.argv[4] === '-r'){
      for (let i = nbChar; i >= 1; --i) {
        console.log(char.repeat(i)) 
      }
    }else{ 
      for (let i = 1; i <= nbChar; i += 1) {
        console.log(char.repeat(i)) 
    }
  }
}

if (process.argv.length > 5) {
  console.log('usage: node pyramid.js number character (-r)')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

if (process.argv[3].length !== 1){
  console.log('Error: Too many characters')
  process.exit(1)
}

if (process.argv[4] !== '-r'){
  console.log('Error: Operator unknown use "-r" for reverse pyramid')
  process.exit(1)
}

let nb = Number(process.argv[2])
let ch = (process.argv[3])
let op = (process.argv[4])
pyramid(nb, ch, op)