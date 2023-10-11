// G.
// 1. Write a method that clears the array from all unnecessary elements, like
//  false, undefined, empty strings, zero, null.  (must use filter() function)
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]


function del(array){
    return array.filter((item) =>item);
}
console.log(delete([0,2,false,3,undefined, "",2,null]));