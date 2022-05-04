type MyReturns<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;

const foo = (): number => 42;

const bar = (): { a: 'A' } => {
  return { a: 'A' };
};

type FooReturns = MyReturns<typeof foo>; // number

type BarReturns = MyReturns<typeof bar>; // { a: 'A' }
