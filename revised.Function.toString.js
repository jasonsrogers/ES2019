// revised Function#toString

console.log("revised Function#toString");

function /* a random comment */ fn() { 
    /* something in the source code */
    console.log('print of the source code')
}

console.log(`
    Before ECMAS2019 you couldn't print comments of the function
    with toString of function
    fn.toString() => function foo() {}
`)
console.log(fn.toString())
