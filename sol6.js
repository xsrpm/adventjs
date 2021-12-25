function sumPairs(numbers, result) {
  while (numbers.length > 1) {
    for (let i = 1; i <= numbers.length - 1; i++) {
      if (numbers[0] + numbers[i] === result) return [numbers[0], numbers[i]]
    }
    numbers.shift()
  }
  return null
}

console.log(sumPairs([3, 5, 7, 2], 10))
// [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10))
// null
console.log(sumPairs([2, 2, 3, 1], 4))
// [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8))
// [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))
// [1, 5]
