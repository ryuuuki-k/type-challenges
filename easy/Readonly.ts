// Q: https://github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md

// readonlyを付けたり外したりすることができる
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#mapping-modifiers

type MyReadonly<T extends {}> = {
  readonly [U in keyof T]: T[U];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
