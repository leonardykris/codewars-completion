/*
  Question:
  Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

  Note: In this case, all triangles must have surface greater than 0 to be accepted.

  Logic:
  There are 3 Integer values involved as an input: A, B and C.
  The question asks for a way to verify that three given sides can form a triangle. Thus this is a problem involving the Triangle Inequality theorem that states: the sum of two sides of a triangle must be greater than the third side.

  Thus,
  A + B > C,
  A + C > B,
  B + C > A,
  and only if these three equations are proven to be correct, then these 3 sides can form a triangle.

*/

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

// Best practice: the comparison return true/false by itself, so just use it

function isTriangle(a, b, c) {
   return a + b > c && a + c > b && c + b > a;
}

