function dynamicFizzBuzz(max, num1, num2) {
  let output = [];
  for (let i = 0; i < max; i++) {
    if (i % num1 === 0 && i % num2 !== 0) {
      output.push(i);
    } else if (i % num2 === 0 && i % num1 !== 0) {
      output.push(i);
    }
  } return output;
}



console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]
