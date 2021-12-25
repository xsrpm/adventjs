function contarOvejas(ovejas) {
  // aquí tu magia
  const newovejas = ovejas.filter((o) => {
    return (
      o.color === 'rojo' &&
      o.name.toLowerCase().includes('a') &&
      o.name.toLowerCase().includes('n')
    )
  })
  return newovejas
}

//tests

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)
