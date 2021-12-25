function decodeNumber(symbols) {
  const validSymbols = new Map()
  validSymbols.set('.', 1)
  validSymbols.set(',', 5)
  validSymbols.set(':', 10)
  validSymbols.set(';', 50)
  validSymbols.set('!', 100)
  let symNumber = []
  for (let i = 0; i < symbols.length; i++) {
    if (validSymbols.has(symbols[i])) {
      symNumber[i] = validSymbols.get(symbols[i])
    } else return NaN
  }
  let sum = 0
  for (let i = symNumber.length - 1; i >= 0; i--) {
    if (i === symNumber.length - 1) {
      sum = symNumber[i]
    } else {
      if (symNumber[i] < symNumber[i + 1]) {
        sum -= symNumber[i]
      } else {
        sum += symNumber[i]
      }
    }
  }
  return sum
}
