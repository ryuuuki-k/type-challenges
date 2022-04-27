type MyReturns<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;

const foo = (): number => 42;

const bar = (): { a: 'A' } => {
  return { a: 'A' };
};

type FooReturns = MyReturns<typeof foo>;
// type _FooReturns = number

type BarReturns = MyReturns<typeof bar>;
// type _BarReturns = { a: 'A';}
