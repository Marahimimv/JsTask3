// D.
// 1. Parametr olaraq array alan funksiya yaradın.  
// 2. Girilən arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə 
// bir arrayə doldurun və bu arrayi return edin.
// ÖNƏMLİ!! Set'dən istifadə etmək olmaz. 
//   Example:
//     func([1, "salam", 1, true, true, false, false, false, 5]) =>
//      [1, salam, true, false, 5]
//     func([2, "class", 1, true, "class", 16, 17, 18]) => 
//     [2, class, 1, true, 16, 17, 18]


function prm(array){
    let array2=[];
    for(let i=0;i<array.length;i++){
        if(!array2.includes(array[i])){
            array2.push(array[i]);
        }

    }
    return array2;
}
console.log(prm([,2,33,5,6,7,88,33,66,33,3,9,20,35,33,23]));
