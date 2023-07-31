function filterRange(arr, a, b) {
  // ваш код...
  return arr.filter(x => arr[x] >= a && arr[x] <= b)

}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
