function wrapGifts(gifts) {
  if (gifts.length === 0) return gift
  const GIFT_LENGTH = gifts[0].length
  let wrapper = []
  let cad
  cad = '*'
  for (let i = 0; i < GIFT_LENGTH; i++) cad = cad.concat('*')
  cad = cad.concat('*')
  wrapper.push(cad)
  gifts.forEach((gift) => {
    wrapper.push('*' + gift + '*')
  })
  cad = '*'
  for (let i = 0; i < GIFT_LENGTH; i++) cad = cad.concat('*')
  cad = cad.concat('*')
  wrapper.push(cad)
  return wrapper
}
