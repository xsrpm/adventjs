function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let up = true
  for (let i = 1; i < heights.length; i++) {
    if (up) {
      if (heights[i] < heights[i - 1]) up = false
      else if (heights[i] === heights[i - 1]) return false
    } else {
      if (heights[i] >= heights[i - 1]) return false
    }
  }
  return true && !up
}
