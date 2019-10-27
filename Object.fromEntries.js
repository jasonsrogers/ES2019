//Object.fromEntries
// makes an iterable into an object

console.log(Object.fromEntries([["a", 1], ["b", 2], ["c", 3]]));
//{ a: 1, b: 2, c: 3 }

let m = new Map();
m.set("a", 1);
m.set("b", 2);
m.set("c", 3);

console.log(Object.fromEntries(m));
//{ a: 1, b: 2, c: 3 }

// create my own iterable

var myIterable = {
  *[Symbol.iterator]() {
    yield ["a", 1];
    yield ["b", 2];
    // if 2 same attribute
    yield ["c", 3];
    yield ["c", 4];
    yield ["subObject", { d: 5, e: 6 }];
  }
};

console.log(Object.fromEntries(myIterable));
//{ a: 1, b: 2, c: 4, subObject: { d: 5, e: 6 } }
