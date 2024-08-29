function reverseNumber(x) {
  if (x === 0) {
    return "";
  }

  let lastDigit = x % 10;

  return String(lastDigit) + reverseNumber(parseInt(x / 10));
}

let result = reverseNumber(456);
console.log(result);
