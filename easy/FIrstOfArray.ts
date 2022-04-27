// Q: https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md

// type First<T extends any[]> = T[0];
// 上記だと空の配列の場合に　なってしまうためextendsを使用して条件分岐をしている
// T extends [] -> Tが空の配列かどうかを検証している
type First<T extends any[]> = T extends [] ? null : T[0];

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
