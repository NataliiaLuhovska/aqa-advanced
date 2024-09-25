const isOdd = (n) => {
  return n % 2 !== 0;
};

let printMsg = (callback, num) => {
  const isNumOdd = callback(num);
  console.log(`The number ${num} is an odd number: ${isNumOdd}.`);
};
