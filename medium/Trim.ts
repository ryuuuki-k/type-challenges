// https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.ja.md

type Space = ' ' | '\n' | '\t';

type Trim<T extends string> = T extends `${Space}${infer R}`
  ? R extends `${infer L}${Space}`
    ? Trim<L>
    : T
  : T;

type trimed = Trim<'  Hello World  '>; // expected to be 'Hello World'
