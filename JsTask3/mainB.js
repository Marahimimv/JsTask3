// B.
// 1. Bir array return eliyən funksiya yaradın. Bu funksiya parametr olaraq string alsın.
// 2. Girilən string'in sağdan və soldan verilən boşluqları silinsin. Daha sonra içində olan hər bir vergül(,) işarəsi slash(/) ilə əvəz edilsin. Bütün hərflər böyük hərfə çevrilsin. Ən sonda bütün karakterlər ayrılaraq bir arraya doldurulsun və bu array return edilsin.
// Example:
// func('qara,at,') => ['Q', 'A', 'R', 'A', '/', 'A', 'T', '/']


function strArr(str) {
    return str.trim().toUppercase().replaceALL(",","/").split("")
}
console.log(strArr("qara,at,"));

