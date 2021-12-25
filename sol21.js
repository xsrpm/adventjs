function canCarry(capacity, trip) {
  let route = new Map()
  let maxRoute = 0
  trip.forEach((r) => {
    if (route.has(r[1])) {
      route.set(r[1], route.get(r[1]) + r[0])
    } else {
      route.set(r[1], r[0])
    }
    if (route.has(r[2])) {
      route.set(r[2], route.get(r[2]) - r[0])
    } else {
      route.set(r[2], -r[0])
    }
    maxRoute = Math.max(maxRoute, r[2])
  })
  let currentCapacity = 0
  let i = 0
  while (i <= maxRoute) {
    if (route.has(i)) {
      currentCapacity += route.get(i)
    }
    if (currentCapacity > capacity) {
      return false
    }
    i++
  }

  return true
}
