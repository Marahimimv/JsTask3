// A.
// 1. Bir funksiya yaradın(hec birsey return elemeyecek). Funksiya parametr olaraq array alsın.
// 2. Funksiya girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
// Example:
// func([5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ]) => 
//   print:
//     5 -> 1 ədəd
//     2 -> 2 ədəd
//     salam -> 2 ədəd
//     necesen -> 1 ədəd
//     56 -> 1 ədəd


function Count(array) {
    let check = [];
    for(let i=0; i<array.length; i++){
        if(!check.includes(array[i])){
            check.push(array[i]);
            console.log(`${array.filer((item)=>item == array[i]).length} of ${array[i]}`);
        }
    }
}
Count(["Salam",32,false,32,"Salam",6,6,6]);



