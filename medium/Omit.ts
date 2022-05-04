// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md

type MyOmit<T, K extends keyof T> = {
  // ↓ asの使い方
  // https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
