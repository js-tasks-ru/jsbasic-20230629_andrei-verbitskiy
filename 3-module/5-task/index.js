function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ')
  let numbArr = []
  arr.forEach(x => {
    let numb = parseInt(x)
    if (!isNaN(numb) && typeof numb === 'number') {
      numbArr.push(parseFloat(x))
    }
  })
  let newArr = numbArr.sort((a, b) => a - b)

  return {
    min: newArr[0],
    max: newArr[newArr.length - 1]
  }
}
let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73 -5.2';
console.log(getMinMax(inputData))
