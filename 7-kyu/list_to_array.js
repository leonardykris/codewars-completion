/*
  Lists are data structures composed of nested objects, each containing a single value and a reference to the next object. Here's an example of a list in JavaScript:
  {value: 1, next: {value: 2, next: {value: 3, next: null}}}

  In Python, lists will be represented by a preloaded LinkedList class with the members value and next. Here's an example:
  LinkedList(1, LinkedList(2, LinkedList(3)))

  Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:
  [1, 2, 3]

  Assume all inputs are:
  - valid lists with at least one value.
  - and for the purpose of simplicity, all values will be either numbers, strings, or Booleans.
*/

function listToArray(list) {
  //write your code here
  var result = [];
  result.push(list.value);
  if (list.next !== null) {
    return result.concat(listToArray(list.next));
  } else {
    return result;
  }
}

// Clever
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}

// The concat strategy
function listToArray(list) {
  return !list ? [] : [list.value].concat(listToArray(list.next));
}

// Another alternative
function listToArray(list) {
  let res = [];
  do {
    res.push(list.value);
  } while (list = list.next);
  return res;
}
