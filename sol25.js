function canMouseEat(direction, game) {
  let mi, mj
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === 'm') {
        mi = i
        mj = j
      }
    }
  }
  if (direction === 'up') {
    if (mi - 1 >= 0 && game[mi - 1][mj] === '*') return true
    else false
  }
  if (direction === 'down') {
    if (mi + 1 < game.length && game[mi + 1][mj] === '*') return true
    else false
  }
  if (direction === 'left') {
    if (mj - 1 >= 0 && game[mi][mj - 1] === '*') return true
    else false
  }
  if (direction === 'right') {
    if (mj + 1 < game[mi].length && game[mi][mj + 1] === '*') return true
    else false
  }

  return false
}
