function ucFirst(str) {
  // ваш код...
  switch (str) {
    case '':
      return str
    case str.length === 1:
      return str.toUpperCase()
    case str:
      return str[0].toUpperCase() + str.slice(1)
  }
}
