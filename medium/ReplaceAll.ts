// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.ja.md

type ReplaceAll<
  T extends string,
  K extends string,
  U extends string
> = T extends ''
  ? T
  : T extends `${infer R}${K}${infer L}`
  ? ReplaceAll<`${R}${U}${L}`, K, U>
  : T;

type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
