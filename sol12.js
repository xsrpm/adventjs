function getMinJump(obstacles) {
  const obs = obstacles.sort((a, b) => a - b)
  let i = 1
  let sledPosition
  let obstaclesPassed
  while (true) {
    sledPosition = 0
    obstaclesPassed = true
    let j = 0
    while (j < obs.length) {
      if (sledPosition === obs[j]) {
        obstaclesPassed = false
        break
      } else if (sledPosition > obs[j]) {
        j++
      } else {
        sledPosition += i
      }
    }
    if (obstaclesPassed) {
      return i
    }
    i++
  }
}
