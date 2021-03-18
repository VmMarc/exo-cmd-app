const pyramid = (nbChar, char) => {
  for (let i = nbChar; i >= 1; --i) {
    console.log(char.repeat(i)) 
  }
}

pyramid(3, 'X')