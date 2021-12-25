function checkIsSameTree(treeA, treeB) {
  let res = treeA.value === treeB.value
  if (treeA.left && treeB.left) {
    res = res && checkIsSameTree(treeA.left, treeB.left)
  } else if (!treeA.left && !treeB.left) res = res && true
  else return false
  if (treeA.right && treeB.right) {
    res = res && checkIsSameTree(treeA.right, treeB.right)
  } else if (!treeA.right && !treeB.right) res = res && true
  else return false
  return res
}
