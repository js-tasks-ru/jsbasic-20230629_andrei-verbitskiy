function checkSpam(str) {
  // ваш код...
  let spamWord1 = '1xBet'
  let spamWord2 = 'XXX'
  let strToLowerCase = str.toLowerCase()

  if (strToLowerCase.includes(spamWord1.toLowerCase()) || strToLowerCase.includes(spamWord2.toLowerCase())) {
    return true
  } else {
    return false
  }
}
