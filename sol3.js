function isValid(letter) {
  return !letter.includes('()') && /.*\([^\[\{]+\).*/g.test(letter)
}

console.log(isValid('bici coche (balón) bici coche peluche'))
// -> ✅

console.log(isValid('(muñeca) consola bici'))
// ✅

console.log(isValid('bici coche (balón bici coche'))
// -> ❌
console.log(isValid('peluche (bici [coche) bici coche balón'))
// -> ❌
console.log(isValid('(peluche {) bici'))
// -> ❌
console.log(isValid('() bici'))
// ❌
