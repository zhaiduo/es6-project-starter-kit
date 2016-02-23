// use here your library name
//module.exports = require('./dist/Greeter')

var greeter = new Greeter()

console.log(greeter.message) // -> "hi there Dear Coder!"
// these white spaces will be trimmed
greeter.message = '   yes         '
console.log(greeter.message) // -> "goodbye Dear Coder!"

