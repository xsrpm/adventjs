function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let tree = ''
  let i = 0
  while (i < height) {
    for (let j = 1; j < height - i; j++) tree += '_'
    for (let j = 0; j < i; j++) tree += '*'
    tree += '*'
    for (let j = 0; j < i; j++) tree += '*'
    for (let j = 1; j < height - i; j++) tree += '_'
    tree += '\n'
    i++
  }
  for (let i = 0; i < height - 1; i++) tree += '_'
  tree += '#'
  for (let i = 0; i < height - 1; i++) tree += '_'
  tree += '\n'
  for (let i = 0; i < height - 1; i++) tree += '_'
  tree += '#'
  for (let i = 0; i < height - 1; i++) tree += '_'
  return tree
}

console.log(createXmasTree(5))
console.log('\n')
console.log(createXmasTree(3))
