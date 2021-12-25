function groupBy(collection, it) {
  // copilot es mi pastor, nada me faltará
  return collection.reduce((acc, item) => {
    let key
    if (typeof it === 'function') key = it(item)
    else key = item[it]

    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
}
