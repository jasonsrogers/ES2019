// function stringifyParams(strings, ...keys) {
//     var result = [strings[0]];
//     keys.forEach(function(key, i) {
//       result.push(JSON.stringify(keys[i]), strings[i + 1]);
//     });
//     return result.join("");
//   }

console.log("Array.flatMap");

let arr1 = [1, 2, 3, 4];

console.log(arr1.map(x => [x * 2]));
// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]

arr1 = [1, 2, 3, [4, 5, 6]];
console.log(arr1.flatMap(x => [[x * 2]]));
// Note only one level flattening
//[ [ 2 ], [ 4 ], [ 6 ], [ NaN ] ]

console.log(
  [{ fname: "john", lname: "smith" }, { fname: "jane", lname: "doe" }].flatMap(
    obj => `Dear ${obj.fname} ${obj.lname}`
  )
);

// filter out all underage
// Note: this demos that map happens before flat
console.log(
  [
    { fname: "john", lname: "smith", age: 38 },
    { fname: "jane", lname: "doe", age: 36 },
    { fname: "Kevin", lname: "McCallister", age: 8 }
  ].flatMap(person => {
    if (person.age < 18) {
      return;
    } else {
      return person;
    }
  })
);

arr1 = [
  `I'm walking `,
  `on sunshine`,
  `in the rain`,
  ``,
  `something something dark side`
];

console.log(arr1.map(x => x.split(" ")));
console.log(arr1.flatMap(x => x.split(" ")));
