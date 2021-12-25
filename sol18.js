function fixFiles(files) {
  const dic = new Map()
  for (let i = 0; i < files.length; i++) {
    if (!dic.has(files[i])) {
      dic.set(files[i], 0)
    } else {
      dic.set(files[i], dic.get(files[i]) + 1)
      files[i] = files[i] + '(' + dic.get(files[i]) + ')'
    }
  }
  return files
}
