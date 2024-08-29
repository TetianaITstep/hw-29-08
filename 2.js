function numbers() {
  let count = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      count++;
    }
  }
  console.log(count);

  return count;
}

numbers(3, 6, 7);
