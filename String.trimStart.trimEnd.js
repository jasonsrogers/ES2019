// String#{trimStart,trimEnd}

console.log(`String#{trimStart,trimEnd}`);

let str = "A normal string with blank  ";
let strRes = str.trimRight();
// Note str is not affected, trimRight() creates new string
console.log(
  `str: "${str}", str.length: ${str.length}, str.trimRight(): "${strRes}", str.trimRight().length: ${strRes.length}`
);

console.log(str === strRes);

strRes = str.trimEnd();
console.log(
  `str: "${str}", str.length: ${str.length}, str.trimRight(): "${strRes}", str.trimRight().length: ${strRes.length}`
);

str = "   blank before and after   ";
strRes = str.trimEnd();
console.log(
  `str: "${str}", str.length: ${str.length}, str.trimEnd(): "${strRes}", str.trimEnd().length: ${strRes.length}`
);
strRes = str.trimStart();
console.log(
  `str: "${str}", str.length: ${str.length}, str.trimStart(): "${strRes}", str.trimStart().length: ${strRes.length}`
);

