function pangram(letter) {
  let alphabet = 'abcdefghijklmnñopqrstuvwxyz'
  let count = Array.from(Array(27), (x) => false)
  let letters = {
    ä: 'a',
    ë: 'e',
    ï: 'i',
    ö: 'o',
    ü: 'u',
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u'
  }
  const newLetter = Array.from(letter).map((x) => x.toLowerCase())
  for (let i = 0; i < newLetter.length; i++) {
    if (alphabet.includes(newLetter[i])) {
      count[alphabet.indexOf(newLetter[i])] = true
    } else if (letters[newLetter[i]]) {
      count[alphabet.indexOf(letters[newLetter[i]])] = true
    }
  }
  return count.find((x) => x === false) === undefined ? true : false
}
