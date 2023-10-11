// E.
// 1. Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.
//  (must use filter() or forEach() or map() or slice() functions)
// Example:
// console.log(getFirst([1, 73, 99, 20])) -> 1
// console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// console.log(getFirst([1, 73, 99, 20], 0)) -> []
// console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]


function prm(array,n=1){
    if(n==1) return array[0];
    return array.filter((_, indx)=> indx<n);

}
console.log(prm([1,35,64,54]));
console.log(prm([1,35,64,54],2));
console.log(prm([1,35,64,54],0));
console.log(prm([1,35,64,54],4));