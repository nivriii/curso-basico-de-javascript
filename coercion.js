// Coerción implicita

var a = 4 + "7"; // "47"
typeof(a); // "string"

var a = 4 * "7"; // "28"
typeof(a); // "number"

var a = 20; // 20
var b = a + ""; // "20"

console.log(b); // 20
typeof(b); // "string"

// Coerción explicita

var c = String(a); // "20"

console.log(c);  // 20
typeof(c); // "string"

var d = Number(c); // 20
typeof(d); // "number"