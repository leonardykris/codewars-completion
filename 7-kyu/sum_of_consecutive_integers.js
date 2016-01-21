/*
  Question:
  The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

  For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

  We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

  Note: Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.

  Logic:
  It's basically playing with the mean concept of a series of numbers. Given the number of elements in the series of consecutive numbers and its sum, find out what numbers make up the series and when requested with a number referring to this series index, return that number.

  The thinking goes this way: if you have 3 numbers that are consecutive, say, [3, 4, 5] and it has a sum of 12, you normally find the mean by dividing the sum of the series with the number of its element: 3. We got 4 in this case and thus since this series only contains Integer (with no floating number), and the fact that we have only 3 numbers with 4 being the middle element (mean), the other numbers are basically the -1/+1 of it.

  In terms of series with even number of elements like 4, say [3, 4, 5, 6] with a sum of 18, the mean would be 18 / 4 = 4.5. In this occasion, since floating numbers are not permitted, the closest numbers by rounding the mean up and down will be 4 and 5, making the rest of the elements -1/+1 of these elements.

  Think of n, the index, as the step from x, because n < x (confirmed)
  [1, 2, 3, 4, 5]
  x = 5
  m = 3 (p = 2)
  n = 3
  p = 4

  You have an option to construct the array, but in this case we do not necessarily need it.

*/

function position(x, y, n) {
  var mean = y / x;
  var modifier = Math.floor(x / 2);
  if (x % 2 == 0) {
    if (n < modifier) {
      return Math.ceil(mean + (n - modifier));
    } else {
      return Math.ceil(mean + (n - modifier));
    }
  } else {
    if (n <= modifier) {
      return mean + (n - modifier);
    } else {
      return mean + (n - modifier);
    }
  }
}

// Minimized
function position(x, y, n) {
  if (x % 2 == 0) return Math.ceil((y / x) + n - Math.floor(x / 2));
  else return (y / x) + n - Math.floor(x / 2);
}

// Best Practice
// WHOA
function position(x, y, n) {
  return y / x - (x - 1) / 2 + n;
}