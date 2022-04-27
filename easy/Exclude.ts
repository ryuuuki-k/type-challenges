// https://github.com/type-challenges/type-challenges/blob/master/questions/43-easy-exclude/README.md

// T extends のTがユニオン型のときはユニオン型に対してループを行う
type MyExclude<T, U> = T extends U ? never : T;

let str: MyExclude<'a' | 'b' | 'c', 'a'> = 'b';
str = 'c';
// str = 'a'; // error!!
