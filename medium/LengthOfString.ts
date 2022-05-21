//https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md

type LengthOfString<
  T extends string,
  U extends any[] = [0]
> = T extends `${infer R}${infer L}`
  ? L extends ''
    ? U['length']
    : LengthOfString<L, [...U, 0]>
  : 0;

let strLength3: LengthOfString<'aaa'> = 3;
// strLength3 = 1; // error

let strLength0: LengthOfString<''> = 0;
// strLength0 = 1; // error
