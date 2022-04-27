// Q: https://github.com/type-challenges/type-challenges/blob/master/questions/3060-easy-unshift/README.md

type Unshift<T extends any[], U> = [U, ...T];

let arr1: Unshift<[number, boolean], string> = ['hoge', 42, true];
// arr1[0] = 42; // error

let arr2: Unshift<[true, { name: 'bob'; age: 42 }], string>;
// arr2 = [true, { name: 'bob', age: 43 }, 'hoge']; // error
