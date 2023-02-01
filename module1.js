// require


const names = require('./module_2')
const sayHi = require('./module_3')
console.log(names);
const data = require('./module_4')


sayHi(names.john)
sayHi(names.peter)
console.log(data)