// C.
// 1. Bir boolean return edən funksiya yaradın. Funksiya parametr olaraq iki array alır.
// 2. Funksiya göndərilən iki arrayi qarşılaşdırıb içindəki elementlərin eyni olub olmadığını yoxlamalı və ona görə boolean dəyər return eləməlidir.
// Example:
// func([1, 2, 3], [1, 2, 3]) => true
// func([1, 2, 3], [3, 2, 1]) => true
// func([1, 2], [1, 2, 2]) => false
// func(["salam", 2], ["salam", "2"]) => false
// func([1, 4, "at"], ["at", 1, 4]) => true
// func(["At", 1], [1, "aT"]) => false


function prm(arr1,arr2) {
    if (arr1.length !=arr2.length){
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        if(
            arr1.filter((item) => item ===arr[i]).length !=
            arr2.filter((item)=>item===arr[i]).length
        ){
            return false;
        }

    }
    return true;
}
console.log(prm([1,2,3],[3,2,1]));
console.log(prm([1,2],[1,2,2]));
console.log(prm([1,1,2],[1,2,2]));
console.log(prm(["salam",2],["salam","2"]));
console.log(prm([1,4,"at"],["at",1,4]));
console.log(prm(["At",1],[1,"aT"]));