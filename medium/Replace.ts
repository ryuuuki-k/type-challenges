// https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.ja.md

type Replace<
  T extends string,
  U extends string,
  K extends string
> = T extends `${infer R}${U}${infer L}` ? `${R}${K}${L}` : never;

type replaced = Replace<'types are fun!!', 'fun', 'awesome'>;
