function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  // con ayuda de copilot xd
  let minPrice = prices[0]
  let maxProfit = -1
  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i]
    let potentialProfit = currentPrice - minPrice
    maxProfit = Math.max(maxProfit, potentialProfit)
    minPrice = Math.min(minPrice, currentPrice)
  }
  return maxProfit > 0 ? maxProfit : -1
}
