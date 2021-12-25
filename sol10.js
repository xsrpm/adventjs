function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let coins = [0, 0, 0, 0, 0, 0]
  coins[5] = parseInt(change / 50)
  change = change - coins[5] * 50
  coins[4] = parseInt(change / 20)
  change = change - coins[4] * 20
  coins[3] = parseInt(change / 10)
  change = change - coins[3] * 10
  coins[2] = parseInt(change / 5)
  change = change - coins[2] * 5
  coins[1] = parseInt(change / 2)
  change = change - coins[1] * 2
  coins[0] = parseInt(change / 1)
  return coins
}
