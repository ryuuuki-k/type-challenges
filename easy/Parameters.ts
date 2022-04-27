// Q: https://github.com/type-challenges/type-challenges/blob/master/questions/3312-easy-parameters/README.md

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : any;

const foo = (arg1: string, arg2: number): void => {};
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};
const baz = (): void => {};

type FooArgs = MyParameters<typeof foo>;
// type _FooArgs = [arg1: string, arg2: number]

type BarArgs = MyParameters<typeof bar>;
// type BarArgs = [arg1: boolean, arg2: { a: 'A';}]

type BazArgs = MyParameters<typeof baz>;
// BazArgs = []
