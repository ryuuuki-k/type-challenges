// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown>
    ? DeepReadonly<T[P]>
    : T[P];
};

type X = {
  x: {
    a: number;
    b: string;
  };
  y: string;
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
const todo: DeepReadonly<X> = {
  x: { a: 1, b: 'hi' },
  y: 'hey',
};

// todo.x.a = 42; // error
// todo.y = '_hello'; // error
