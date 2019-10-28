  function stringifyParams(strings, ...keys) {
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      result.push(JSON.stringify(keys[i]), strings[i + 1]);
    });
    return result.join("");
  }

console.log("Array.flat.js");

var arr1 = [1, 2, [3, 4]];
var arr1res = arr1.flat();
// [1, 2, 3, 4]
console.log(stringifyParams`Arr: ${arr1}, arr.flat: ${arr1res}`);

var arr2 = [1, 2, [3, 4, [5, 6]]];
var arr2res = arr2.flat();
// [1, 2, 3, 4, [5, 6]]
console.log(stringifyParams`Arr: ${arr2}, arr.flat: ${arr2res}`);

var arr3 = [1, 2, [3, 4, [5, 6]]];
var arr3res = arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
console.log(stringifyParams`Arr: ${arr3}, arr.flat: ${arr3res}`);

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
var arr4res = arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(stringifyParams`Arr: ${arr4}, arr.flat: ${arr4res}`);

var arr5 = [1, 2, , 4, 5];
var arr5res = arr5.flat();
// [1, 2, 4, 5]
console.log(stringifyParams`Arr: ${arr5}, arr.flat: ${arr5res}`);

var arr6 = [
  { a: 1 },
  [{ a: 2 }, { a: 3, subArray: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] }]
];
var arr6res = arr6.flat(Infinity);
// Arr: [{"a":1},[{"a":2},{"a":3,"subArray":[1,2,[3,4,[5,6,[7,8,[9,10]]]]]}]], arr.flat: [{"a":1},{"a":2},{"a":3,"subArray":[1,2,[3,4,[5,6,[7,8,[9,10]]]]]}]
// can flattern with objects and flat does not affect arrays inside the object
console.log(stringifyParams`Arr: ${arr6}, arr.flat: ${arr6res}`);


