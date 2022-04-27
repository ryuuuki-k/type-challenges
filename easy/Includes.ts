// https://github.com/type-challenges/type-challenges/blob/master/questions/898-easy-includes/README.md

// type Includes<T extends any[], U> = U extends T[number] ? true : false;
// ↑よくある間違い

type Includes<T extends any[], U> = T extends [infer R, ...infer L]
  ? [U, R] extends [R, U]
    ? true
    : Includes<L, U>
  : false;

let test1: Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> = true;
// test = false; // error

let test2: Includes<[1, 2, 3, 5, 6, 7], 7> = true;
// test2 = false; // error

let test3: Includes<[{}], { a: 'A' }> = false;
// test3 = true; // error

//  ↓ test1のイメージ
//  ****** 1st Loop ******
//  T -> ['Kars', 'Esidisi', 'Wamuu', 'Santana']
//  infer R -> 'Kars'
//  infer L -> ['Esidisi', 'Wamuu', 'Santana']
//  [U, R], [R, U] -> ['Santana', 'Kars'], ['Kars', 'Santana']
//  result -> to Include<L, U>

//  ****** 2nd Loop ******
//  T -> ['Esidisi', 'Wamuu', 'Santana']
//  infer R -> 'Esidisi'
//  infer L -> ['Wamuu', 'Santana']
//  [U, R], [R, U] -> ['Santana', 'Esidisi'], ['Esidisi', 'Santana']
//  result -> to Include<L, U>

//  ****** 3rd Loop ******
//  T ->['Wamuu', 'Santana']
//  infer R -> 'Wamuu'
//  infer L -> ['Santana']
//  [U, R], [R, U] -> ['Santana', 'Wamuu'], ['Wamuu', 'Santana']
//  result -> to Include<L, U>

//  ****** Last Loop ******
//  T  -> ['Santana']
//  infer R -> 'Santana'
//  infer L -> []
//  [U, R], [R, U] -> ['Santana', 'Santana'], ['Santana', 'Santana']
//  result -> true 🌸
