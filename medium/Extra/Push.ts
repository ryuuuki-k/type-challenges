// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type Push<T extends any[], U> = T extends [...infer R] ? [...R, U] : never;

type re1 = Push<arr1, 'Hoge'>; // expected to be ["a", "b", "c", "d", "Hoge"]
type re2 = Push<arr2, 42>; // expected to be [3, 2, 1, 42]
