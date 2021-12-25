function listGifts(letter) {
  const gifts = letter.split(' ')
  const filterGifts = gifts
    .filter((g) => !g.startsWith('_'))
    .filter((g) => g !== '')
  console.table(filterGifts)
  const obj = {}
  filterGifts.forEach((gif) => {
    obj[gif] === undefined ? (obj[gif] = 1) : obj[gif]++
  })
  return obj
}

const carta = 'bici coche balón _playstation bici coche peluche'

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
