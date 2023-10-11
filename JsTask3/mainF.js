// F.
// 1. Write a simple JavaScript program to join all elements of
//  the following array into a string.
// console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
// console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

function prm(array, symbol) {
  let joinedStr = "";
  for (let i = 0; i < array.length; i++) {
    joinedStr += array[i] + symbol;
  }

  return joinedStr.slice(0, joinedStr.length - 1);
}
console.log(prm([2, 46, 24, 75], "*"));
console.log(prm([2, 46, 24, 75], "/"));
