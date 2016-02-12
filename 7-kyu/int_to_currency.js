/*
  Question:
  Write a function that takes an integer in input and outputs a string with currency format. Integer in currency format is expressed by a string of number where every three characters are separated by comma.

  Ex. 123456 -> "123,456"

  Note:
  Input will always be an positive integer, so don't worry about type checking or negative/float values.

  Logic:
  There's an Integer I as input and expected String S as the output.
  There are 2 ways in doing this:
  1. Cast the Integer I to String S,
      separate them per C characters,
      add the symbol S to each String pieces, and
      combine all pieces back, or
  2. Retain Integer I,
      find the remainder R of I when it's divided by V value,
      divide I with V and use recursion to find the next R,
      for each iteration, combine them back to S

  Decision: 2nd one

  Problem(s) encountered:
  1. The remainder R is too small

  Solution(s):
  1. Declare an extra function called pad to add leading zeroes
*/

function toCurrency(price) {
  var temp = "";
  if (price > 1000) {
    temp += toCurrency(Math.floor(price / 1000)) + "," + pad(price % 1000);
  } else {
    temp += price;
  }
  return temp;
}

function pad(price) {
  return ("000" + price).substr(-3);
}

// Best Practice: up your regex game

function toCurrency(price){
  return price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

// Also a good one:

function toCurrency(price) {
  return ("" + price).split('').reverse().map(function(currentValue, index) {
    return index % 3 === 0 && index > 0 ? currentValue + ',' : currentValue;
  }).reverse().join('');
}