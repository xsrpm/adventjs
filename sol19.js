function learn(time, courses) {
  let tmpi = -1,
    tmpj = -1
  for (let i = 0; i < courses.length - 1; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (i === j) {
        continue
      }
      if (courses[i] + courses[j] === time) {
        return [i, j]
      }
      if (courses[i] + courses[j] < time) {
        if (tmpi === -1 && tmpj === -1) {
          tmpi = i
          tmpj = j
        } else {
          if (courses[i] + courses[j] > courses[tmpi] + courses[tmpj]) {
            tmpi = i
            tmpj = j
          }
        }
      }
    }
  }
  if (tmpi === -1 && tmpj === -1) return null
  else return [tmpi, tmpj]
}
