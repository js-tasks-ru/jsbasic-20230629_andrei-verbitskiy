function factorial(n) {
  // ваш код...
  let factorialNumb = 1;

  switch (n) {
  case 0:
    break;
  case 1:
    break;
  default:
    while (n > 1) {
      factorialNumb *= n;
      n--;
    }
    break;
  }
  return factorialNumb;
}
