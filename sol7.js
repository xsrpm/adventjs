function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
  console.log(store)
  let res = false
  if (typeof store === 'string') {
    if (store === product) {
      return true
    } else {
      return false
    }
  }

  for (let obj in store) {
    if (res === true) return res
    else res = contains(store[obj], product)
  }
  return res
}
