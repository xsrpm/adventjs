function missingReindeer(ids) {
  let sortIds = ids.sort((a, b) => a - b)
  for (let i = 0; i < sortIds.length; i++) {
    if (ids[i] !== i) {
      return i
    }
  }
  return sortIds.length
}
