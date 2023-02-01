// require


const names = require('./module2')
const sayHi = require('./module3')
console.log(names);
const data = require('./module4')


sayHi(names.john)
sayHi(names.peter)
console.log(data)