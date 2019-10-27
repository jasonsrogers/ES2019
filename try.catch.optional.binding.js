//try { } catch {} // optional binding
console.log("try { } catch {} // optional binding");

// traditional try catch
let jsonData;
try {
  jsonData = JSON.parse("abc");
} catch (error) {
  console.log(error.message);
  jsonData = { a: 1 };
}
console.log(jsonData);

// as we are not doing anything with error why do we need it ?

// optional binding try catch
try {
  jsonData = JSON.parse("abc");
} catch {
  console.log("default JSON response");
  jsonData = { a: 1 };
}
console.log(jsonData);

// other example: feature supported
let supported;
try {
  canUseFeatureFunction();
  supported = true;
} catch {
  supported = false;
}
console.log(`supported: ${supported}`);

// assert throws
// node has assert.throws(func) that can be implemented like
function assertThrows(func) {
  try {
    func();
  } catch {
    return;
  }
  throw `Function didn't throw exception`;
}

function withThrow() {
  throw "Something";
}
function withoutThrow() {}
try {
  assertThrows(withThrow);
  console.log("Goes here");
} catch {
  console.log("Does not come here");
}

try {
  assertThrows(withoutThrow);
  console.log("Does not come here");
} catch {
  console.log("Goes here");
}
