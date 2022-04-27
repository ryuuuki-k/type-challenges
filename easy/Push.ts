//Q:  https://github.com/type-challenges/type-challenges/blob/master/questions/3057-easy-push/README.md

type Push<T extends any[], U> = [...T, U];

let arr1: Push<[], string> = ['hoge'];
// arr1[0] = 42; // error

let arr2: Push<[true, { name: 'bob'; age: 42 }], string>;
// arr2 = [true, { name: 'bob', age: 43 }, 'hoge']; // error
