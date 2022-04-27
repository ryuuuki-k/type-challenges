// https://github.com/type-challenges/type-challenges/blob/master/questions/189-easy-awaited/README.md

// type ExampleType1<T extends Promise<any>> = T extends Promise<string> ? string : never;
// type ExampleType2<T extends Promise<any>> = T extends Promise<number> ? number : never;
// type ExampleType3<T extends Promise<any>> = T extends Promise<boolean> ? boolean : never;

//　上記のようなジェネリクスに入ってくる時点では特定の型ではないけれど、ジェネリクスで受け取ったあとに共通の型を使用したいときにinferを使用する
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;

let val: MyAwaited<X> = 'a';
// val = 42; // error

let val2: MyAwaited<Y> = { field: 42 };
// val2 = '42'; // error

let val3: MyAwaited<Z>;
