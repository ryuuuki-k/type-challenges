// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type Unshift<T extends any[], U> = T extends [...infer R] ? [U, ...R] : any;

type re1 = Unshift<arr1, 'Hoge'>; // expected to be 'a'
type re2 = Unshift<arr2, 42>; // expected to be 3
