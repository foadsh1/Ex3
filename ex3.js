//Students names:Foad shalata  ID:314743097       Rabea bader   ID:207530478

const numbers = [0, 5, 0, 3, 0, 9, 2, 0, 7, 0, 0];

let zeroCount = 0;

numbers.forEach(num => zeroCount += (num === 0 ? 1 : 0));

console.log(`The number of zeros in the array is: ${zeroCount}`);