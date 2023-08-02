function camelize(str) {
  // ваш код...
  if (str === '') {
    return str
  }
  let arr = str.split('-')
  let newArr = []
  newArr.push(arr[0])
  if (arr.length > 1) {
    arr.forEach(x => {
      if (x !== arr[0]) {
        let newWord = x[0].toUpperCase() + x.slice(1)
        newArr.push(newWord)
      }
    })
    let result = newArr.join('')
    return result
  }
}
