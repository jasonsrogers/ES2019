// stable Array#sort
console.log("stable Array#sort");

let arr = [
  { name: "Alpha", age: 11 },
  { name: "Beta", age: 12 },
  { name: "Charlie", age: 9 },
  { name: "Delta", age: 8 },
  { name: "Echo", age: 12 },
  { name: "Gamma", age: 6 },
  { name: "Hector", age: 15 }
];
console.log(`
    Beta and Echo have the same sort value,
    We would expect Beta to come first Echo and after,
    aka in the case of equality, it maintains the existing
    order.
    Before ECMAS2019 the order of Beta and Echo was not
    guaranteed and was up to implementation so could be reversed`);
console.log(arr.sort((a, b) => b.age - a.age));
