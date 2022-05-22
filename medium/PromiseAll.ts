// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.ja.md

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// https://zenn.dev/uhyo/articles/array-homomorphic-mapped-type
// Homomorphic Mapped Type
declare function PromiseAll<T extends readonly any[]>(
  values: T
): Promise<{
  -readonly [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P];
}>;

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
