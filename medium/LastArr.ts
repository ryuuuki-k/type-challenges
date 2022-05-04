// https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any, infer L] ? L : string;

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
