/*
  Write a function that takes an array/list of numbers and returns a number such that

  Explanation total([1,2,3,4,5]) => 48

  1+2=3--\ 3+5 =>     8 \
  2+3=5--/ \            ==  8+12=>20\
            ==>5+7=> 12 / \           20+28 => 48
  3+4=7--\ /            == 12+16=>28/
  4+5=9--/ 7+9 =>     16  /

  if total([1,2,3]) => 8 then

  first+second => 3 \
                     then 3+5 => 8
  second+third => 5 /

  Examples

  total([-1,-1,-1]) => -4
  total([1,2,3,4])  => 20
  Note: each array/list will have at least an element and all elements will be valid numbers.

  Logic:
  Array reduce?
  Reduce works by taking in the first value, then second, and use function to do something with it

*/

// [1, 2, 3, 4, 5]
// Normal reduce will work like:
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// What the question wants is something like
// 1 + 2
// 2 + 3
// 3 + 4
// 4 + 5

// Then
// 1 + 2 + 2 + 3
// 2 + 3 + 3 + 4
// 3 + 4 + 4 + 5

// Then
// 1 + 2 + 2 + 3 + 2 + 3 + 3 + 4
// 2 + 3 + 3 + 4 + 3 + 4 + 4 + 5

// Then
// 1 + 2 + 2 + 3 + 2 + 3 + 3 + 4 + 2 + 3 + 3 + 4 + 3 + 4 + 4 + 5

// Ordered:
// 1
// 2 + 2 + 2 + 2
// 3 + 3 + 3 + 3 + 3 + 3
// 4 + 4 + 4 + 4
// 5

// Isn't it kinda the same with number pyramid?
// Like,
// 1
// 1, 1
// 1, 2, 1
// 1, 3, 3, 1
// 1, 4, 6, 4, 1
// 1, 5, 10, 10, 5, 1
// It's a Pascal's Triangle
// And also, Power of 11 (11^n)

// So it means there are few ways in how we can solve this:
// First is to use reduce, I guess
// Second is to take each element of the array and then since we know it work based on the Pascal's Triangle, we can repeatedly add them, like
// a, b, c, d, e
// a * 1
// b * 4
// c * 6
// d * 4
// e * 1

// But how do we calculate the Pascal numbers then?
// If the array length is 5, then it's this (1, 4, 6, 4, 1)
// Can we do calculations with two arrays? Like matrix multiplication
// Then that will probably make use of map?

// This approach focuses on the length of the array and uses individual numbers instead of doing all the summation

// The other way is to reduce, push each results to a new array and call reduce again recursively

// [1, 2, 3, 4, 5]
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 4 = 7
// 4 + 5 = 9

// 3 + 5 = 8
// 5 + 7 = 12
// 7 + 9 = 16

// 8 + 12 = 20
// 12 + 16 = 28

// 20 + 28 = 48

// If we use this logic instead, then, it means we have to find way to do it recursively by forming different arrays each time

function total(array) {
  var temp = [];
  var prev;
  return array.map(function(obj){
    prev = current;
    temp.push(previous + current);
  }) * 2 - array[0] - array[array.length-1];
}