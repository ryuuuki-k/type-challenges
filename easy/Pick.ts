// Q: https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md

// keyof ->　オブジェクトのキーをユニオン型のstringで受け取る

// Indexed Access Types -> オブジェクトのようにT['hoge']のような形で型を参照できる
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

// Mapped Types -> inを使用してユニオン型のループをループする
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

type MyPick<T, U extends keyof T> = {
  [K in U]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
