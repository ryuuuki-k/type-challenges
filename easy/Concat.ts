//github.com/type-challenges/type-challenges/blob/master/questions/533-easy-concat/README.md#concat--

// Variadic Tuple Types -> スプレッド構文と同じような形で配列の展開をすることができる
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types

type Concat<T extends any[], U extends any[]> = [...T, ...U];

let val1: Concat<[], []>;
// val1 = [42]; // error

let val2: Concat<['1', 2, '3'], [false, boolean, '4']>;
// val2.push(42); // error
