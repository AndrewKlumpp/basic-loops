function fibonacci(length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1];
  }
  let seq = [1, 1];

  while (seq.length < length) {
    let last = seq[seq.length - 1];
    let secondLast = seq[seq.length - 2];
    let next = last + secondLast;
    seq.push(next);
  } return seq;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
