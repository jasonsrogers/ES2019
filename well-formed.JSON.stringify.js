// well-formed JSON.stringify
console.log('well-formed JSON.stringify')

console.log(`
Prior to ES2019 JSON.stringify('\uD800') 
would return '"�"'`)

console.log(JSON.stringify('\uD800'))
// → '"\\ud800"'