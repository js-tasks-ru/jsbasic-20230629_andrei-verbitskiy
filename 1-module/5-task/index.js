function truncate(str, maxlength) {
  // ваш код...
  if (maxlength < str.length) {
    return str.slice(0, maxlength - 1) + '…'
  } else {
    return str
  }
}
