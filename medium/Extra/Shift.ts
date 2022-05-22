// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type Shift<T extends any[]> = T extends [infer R, ...infer L] ? R : never;

type re1 = Shift<arr1>; // expected to be 'a'
type re2 = Shift<arr2>; // expected to be 3
