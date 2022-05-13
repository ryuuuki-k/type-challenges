// https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.ja.md

type AppendArgument<T extends Function, U> = T extends (
  ...args: infer R
) => infer L
  ? (...args: [...R, U]) => L
  : never;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
