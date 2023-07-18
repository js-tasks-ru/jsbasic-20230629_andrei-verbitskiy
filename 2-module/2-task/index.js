function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    if (Object.hasOwn(obj, key)) {
      return false
    }
  }
  return true
}
