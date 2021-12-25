function canReconfigure(from, to) {
  let dicF = new Map()
  let dicT = new Map()
  if (from.length !== to.length) return false
  for (let i = 0; i < from.length; i++) {
    if (!dicF.has(from[i])) {
      if (dicT.has(to[i]) && from[i] !== dicT.get(to[i])) return false
      dicF.set(from[i], to[i])
      dicT.set(to[i], from[i])
    } else {
      if (dicF.get(from[i]) !== to[i]) return false
    }
  }
  return true
}
