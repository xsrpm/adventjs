function countPackages(carriers, carrierID) {
  const carrier = carriers.find((c) => c[0] === carrierID)
  let count = carrier[1]
  for (let i = 0; i < carrier[2].length; i++) {
    count += countPackages(carriers, carrier[2][i])
  }
  return count
}
