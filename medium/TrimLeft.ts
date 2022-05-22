// https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.ja.md

type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T;

type trimed = TrimLeft<'  Hello World  '>;
