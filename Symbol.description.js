// Symbol#description
console.log("Symbol#description");

let Symbol1 = Symbol("SymbolA");
let Symbol2 = Symbol("SymbolA");

console.log(Symbol1, Symbol2, Symbol1 === Symbol2);

const symbolDescription = "symbolDescription";
console.log(`Symbols are guaranteed to be unique,
    Symbol(${symbolDescription}) === Symbol(${symbolDescription})
    => ${Symbol(symbolDescription) === Symbol(symbolDescription)}`);

// Symbol don't convert to string
let Sym = Symbol("Sym");
try {
  // alert(Sym); // this throws error if alert is defined (aka browser not in node)
  console.log("Concat string with Symbol" + Sym);
} catch (error) {
  console.log(`Something went wrong: ${error}`);
}

// However now you can convert it to string
console.log("Concat string with Symbol: " + Sym.toString()); // => Symbol(Sym)
console.log("Concat string with Symbol: " + Sym.description); // => Sym
