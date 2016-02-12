/*
  Question:
  Write a function insertDash(num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

  regex game?

  toString(radix)
  => radix, which base to use for representing a numeric value. Int between 2 to 36


*/

function insertDash(num) {
  num.toString(10).map(Number).map(function(currentValue, index) {
    return this;
  });
}

console.log(insertDash(123345));