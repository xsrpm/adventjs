function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  let normal = 12 * times
  let fidelity = 250
  for (let i = 0; i < times; i++) {
    fidelity += 12 * Math.pow(0.75, i + 1)
  }
  return fidelity < normal
}
